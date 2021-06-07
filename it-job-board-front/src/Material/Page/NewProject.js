import React, {useEffect, useState} from 'react';
import {Button, Divider} from "@material-ui/core";
import {Form} from "react-bootstrap";
import CustomFormGroup from "../Component/Custom/CustomFormGroup";
import CustomSimpleAlert from "../Component/Custom/CustomSimpleAlert";
import '../Style/NewEditProject.scss';
import {getAllProjectStatus, newProject} from "../Feature/ProjectFeature";
import {getAllGroup} from "../Feature/GroupFeature";
import {getAllUsers} from "../Feature/UserFeature";
import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ExceptionErrorCode} from "../../configStatus";

const NewProject = () => {

    const [t] = useTranslation('common');
    const history = useHistory();

    const [projectInfo, setProjectInfo] = useState(
        {
            number: '',
            name: '',
            customer: '',
            group: {},
            users: [],
            status: '',
            startDate: '',
            endDate: '',
        });
    const [groupList, setGroupList] = useState([]);
    const [userList, setUserList] = useState([]);
    const [statusList, setStatusList] = useState([]);
    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState({
        heading: '',
        content: '',
        variant: '',
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPrevData = async () => {
            const fetchGroups = await getAllGroup();
            const fetchStatus = await getAllProjectStatus();
            const fetchUsers = await getAllUsers();
            fetchUsers.map(item => item.displayName = item.visa.concat(": ").concat(item.firstName).concat(" ").concat(item.lastName));
            setGroupList(fetchGroups);
            setStatusList(fetchStatus);
            setUserList(fetchUsers);
            setProjectInfo(prevState => ({
                ...prevState,
                group: fetchGroups[0],
                status: fetchStatus[0],
            }));
            setIsLoading(false);
        }
        fetchPrevData();
    },[]);

    const handleChange = (event, type) => {
        const name = event.target.name ;
        const value = event.target.value;
        if(type === "groups"){
            setProjectInfo(prevState => ({
                ...prevState,
                group: groupList.find(x => x.id === parseInt(value))
            }));
        }else if(type === "status"){
            setProjectInfo(prevState => ({
                ...prevState,
                status: statusList.find(x => x.id === parseInt(value))
            }));
        }else{
            setProjectInfo(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const handleChangeByNameAndValue = (name, value, type) => {
        if(type === "users"){
            setProjectInfo(prevState => ({
                ...prevState,
                users: userList.filter((x) => value.includes(x.id))
            }));
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            setShowAlert(prevState => ({
                ...prevState,
                variant: "danger",
                heading: t('newEditProjectScreen.validate.missing'),
            }));
        }else{
            try{
                await newProject(projectInfo)
                history.push("/projects")
            }catch (err){
                if (err.errorCode !== ExceptionErrorCode.UnHandlerException) {
                    setShowAlert(prevState => {
                        return ({
                            ...prevState,
                            variant: "danger",
                            heading: err.message,
                            content: (
                                <div>
                                    {
                                        err.errors.map((error, index) => (
                                            <h6 key={index}>{error}</h6>
                                        ))
                                    }
                                </div>
                            )
                        });
                    });
                } else {
                    history.push("/error");
                }
            }
        }
    }

    return (
        <div className={"new-edit-project"}>
            <p className={"headline"}>{t('newEditProjectScreen.newProject')}</p>
            <Divider style={{background: "#DCDCDC"}}/>
            {
                showAlert.heading && (
                    <CustomSimpleAlert heading={showAlert.heading} variant={showAlert.variant} content={showAlert.content}
                                       onHandleClose={() => setShowAlert(prevState => ({...prevState, heading: ""}))}/>
                )
            }
            {
                isLoading === false ? (
                    <>
                        <Form noValidate validated={validated} className={"form"} id={"form-new"} onSubmit={handleSubmit}>
                            <CustomFormGroup label={t('newEditProjectScreen.label.number')} name={"number"} value={projectInfo.number}
                                             invalidMessage={t('newEditProjectScreen.validate.number')} ipWidth={3}
                                             onChangeValue={(e) => handleChange(e)}/>
                            <CustomFormGroup label={t('newEditProjectScreen.label.name')} name={"name"} value={projectInfo.name}
                                             invalidMessage={t('newEditProjectScreen.validate.name')}
                                             onChangeValue={(e) => handleChange(e)}/>
                            <CustomFormGroup label={t('newEditProjectScreen.label.customer')} name={"customer"} value={projectInfo.customer}
                                             invalidMessage={t('newEditProjectScreen.validate.customer')}
                                             onChangeValue={(e) => handleChange(e)}/>
                            <CustomFormGroup label={t('newEditProjectScreen.label.group')} name={"group"} value={projectInfo.group.id}
                                             type={"select"} ipWidth={3}
                                             data={
                                                       groupList.map((row) => {
                                                           return { value : row.id, label : row.name}
                                                       })
                                                   }
                                             onChangeValue={(e, type = "groups") => handleChange(e, type)}/>
                            <CustomFormGroup label={t('newEditProjectScreen.label.member')} name={"users"}
                                             type={"multi-select"} required={false}
                                             data={
                                                       userList.map((row) => {
                                                           return { value : row.id, label : row.displayName}
                                                       })
                                                   }
                                             onChangeValue={(name, value, type="users") => handleChangeByNameAndValue(name, value, type)}/>
                            <CustomFormGroup label={t('newEditProjectScreen.label.status')} name={"status"} value={projectInfo.status.id}
                                             type={"select"} ipWidth={3}
                                             data={
                                                       statusList.map((row) => {
                                                           return { value : row.id, label : row.label}
                                                       })
                                                   }
                                             onChangeValue={(e, type = "status") => handleChange(e, type)}/>
                            <div style={{display: 'flex'}}>
                                <div style={{flexBasis: '50%'}}>
                                    <CustomFormGroup label={t('newEditProjectScreen.label.startDate')} name={"startDate"} value={projectInfo.startDate}
                                                     type={"date"} lbWidth={4} ipWidth={6}
                                                     invalidMessage={t('newEditProjectScreen.validate.startDate')}
                                                     onChangeValue={(e) => handleChange(e)}/>
                                </div>
                                <div style={{flexBasis: '50%'}}>
                                    <CustomFormGroup label={t('newEditProjectScreen.label.endDate')} name={"endDate"} value={projectInfo.endDate}
                                                     type={"date"} required={false} lbWidth={4} ipWidth={6}
                                                     labelStyle={{marginLeft: 'auto'}}
                                                     iputStyle={{marginLeft: 'auto'}}
                                                     onChangeValue={(e) => handleChange(e)}/>
                                </div>
                            </div>
                        </Form>
                        <Divider style={{background: "#DCDCDC"}}/>
                        <div className={"form-event-btn"}>
                            <Button variant="contained" onClick={() => history.push("/projects")}>
                                Cancel
                            </Button>
                            <Button variant="contained" type={"submit"} form={"form-new"}>
                                {t('newEditProjectScreen.button.acceptNew')}
                            </Button>
                        </div>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )
            }

        </div>
    );
};

export default NewProject;
