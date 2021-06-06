import React, {useEffect, useState} from 'react';
import {Button, Divider} from "@material-ui/core";
import {Col, Form, Row, Table} from "react-bootstrap";
import '../Style/ProjectList.scss';
import {deleteManyProject, getAllProjectStatus, searchProjectByCustomKeywordAndStatus} from "../Feature/ProjectFeature";
import CustomSimpleAlert from "../Component/Custom/CustomSimpleAlert";
import CustomSimpleFormGroup from "../Component/Custom/CustomSimpleFormGroup";
import CustomSimpleModal from "../Component/Custom/CustomSimpleModal";
import {Link, useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ExceptionErrorCode} from "../../configStatus";

const ProjectsList = () => {

    const [t] = useTranslation('common');
    const history = useHistory();

    const [search, setSearch] = useState({
        keyword: localStorage.getItem("searchKeyword") || "",
        status: localStorage.getItem("searchStatus") || "",
        reset: false,
    });
    const [projects, setProjects] = useState([]);
    const [statusList, setStatusList] = useState([]);
    const [deleteMany, setDeleteMany] = useState(0);
    const [showAlert, setShowAlert] = useState({
        heading: '',
        content: '',
        variant: '',
    });
    const [showModal, setShowModal] = useState({
        open: false,
        heading: '',
        content: '',
        deniedBtnText: '',
        acceptBtnText: '',
        handleDenied: null,
        handleAccept: null,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSearchProjects = async () => {
            let fetchProjects = await searchProjectByCustomKeywordAndStatus(search);
            fetchProjects
                .map(item => {
                    item.isDelete = false;
                    let date = item.startDate.split("-");
                    item.startDate = date[2]+ "-" +date[1]+ "-" +date[0];
                })
            setProjects(fetchProjects);
            setIsLoading(false);
            setSearch(prevState => ({
                ...prevState,
                reset: false,
            }));
        }
        fetchSearchProjects();
    },[search.reset === true]);

    useEffect(() => {
        const fetchPrevData = async () => {
            const fetchStatus = await getAllProjectStatus();
            setStatusList(fetchStatus);
        }
        fetchPrevData();
    },[])

    const handleChangeSearchValue = (event) => {
        const {name, value} = event.target;
        setSearch(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleResetSearchValue = () => {
        setSearch(prevState => ({
            ...prevState,
            status: "",
            keyword: "",
            reset: true,
        }));
        setSearchValueInLocalStorage();
        localStorage.setItem('searchStatus', "");
        localStorage.setItem('searchKeyword', "");

        setDeleteMany(0);
    }

    const setSearchValueInLocalStorage = () => {
        localStorage.setItem('searchStatus', search.status);
        localStorage.setItem('searchKeyword', search.keyword);
    }

    const handleCheckTableRow = (id, checked) => {
        projects.find(x => x.id === id).isDelete = checked
        setProjects([...projects]);
        if(checked) setDeleteMany(deleteMany + 1);
        else setDeleteMany(deleteMany - 1);
    }

    const handleSearch = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const res = await searchProjectByCustomKeywordAndStatus(search);
        res.map(item => item.isDelete = false);
        setProjects(res);
        setSearchValueInLocalStorage();
    }

    const handleDelete = (id) => {
        setShowModal(prevState => ({
            ...prevState,
            open: true,
            heading: t('projectListScreen.delete.one.headline'),
            content: (
                <div>
                    <h5>{t('projectListScreen.delete.one.body')}</h5>
                </div>
            ),
            deniedBtnText: t('projectListScreen.delete.one.button.denied'),
            acceptBtnText: t('projectListScreen.delete.one.button.accept'),
            handleAccept: () => {
                setShowModal(prevState1 => ({...prevState1, open: false}));
                const deleteProject = Array.from(projects.filter(project => project.id === id).map(project => {
                    return project.id
                }));
                handleCallDeleteApi(deleteProject);
            },
            handleDenied: () => {
                setShowModal(prevState2 => ({...prevState2, open: false}))
            }
        }));
    }

    const handleDeleteMany = () => {
        setShowModal(prevState => {
            return {
                ...prevState,
                open: true,
                heading: t('projectListScreen.delete.many.headline'),
                content: <div>
                    <h5>{t('projectListScreen.delete.many.body')}</h5>
                </div>,
                deniedBtnText: t('projectListScreen.delete.many.button.denied'),
                acceptBtnText: t('projectListScreen.delete.many.button.accept'),
                handleAccept: async () => {
                    setShowModal(prevState1 => ({...prevState1, open: false}));
                    const deleteProjects = Array.from(projects.filter(project => project.isDelete === true).map(project => {
                        return project.id
                    }));
                    handleCallDeleteApi(deleteProjects);
                },
                handleDenied: () => {
                    setShowModal(prevState2 => ({...prevState2, open: false}))
                }
            };
        });
    }

    const handleCallDeleteApi = async (ids) => {
        try {
            const res = await deleteManyProject(ids)
            setDeleteMany(deleteMany - ids.length);
            handleResetSearchValue();
            setShowAlert(prevState => {
                return ({
                    ...prevState,
                    variant: "success",
                    heading: res
                });
            });
        } catch (err) {
            if (err.errorCode !== ExceptionErrorCode.UnHandlerException) {
                setShowAlert(prevState => {
                    return ({
                        ...prevState,
                        variant: "danger",
                        heading: err.message,

                    });
                });
            } else {



                history.push("/error");
            }
        }
    }

    const DisplayNewModal = () => {
        if(showModal.open) {
            return (
                <CustomSimpleModal heading={showModal.heading} content={showModal.content}
                                   deniedBtnText={showModal.deniedBtnText} acceptBtnText={showModal.acceptBtnText}
                                   onAcceptValue={showModal.handleAccept} onDeniedValue={showModal.handleDenied}/>
            )
        }else{
            return null;
        }
    }

    return (
        <div className={"project-list"}>
            <p className={"headline"}>{t('projectListScreen.headline')}</p>
            <Divider style={{background: "#DCDCDC"}}/>
            <Divider style={{background: "#DCDCDC"}}/>
            {
                showAlert.heading && (
                    <CustomSimpleAlert heading={showAlert.heading} variant={showAlert.variant} content={showAlert.content}
                                       onHandleClose={() => setShowAlert(prevState => ({...prevState, heading: ""}))}/>
                )
            }
            <DisplayNewModal/>
            {
                isLoading === false ? (
                    <>
                        <Form className={"form"} onSubmit={handleSearch}>
                            <Row >
                                <Col sm={6} className={"search-list"}>
                                    <Row>
                                        <Col sm={8}>
                                            <CustomSimpleFormGroup name={"keyword"} value={search.keyword}
                                                                   placeholder={t('projectListScreen.form.label')} required={false}
                                                                   onChangeValue={(e) => handleChangeSearchValue(e)}/>
                                        </Col>
                                        <Col sm={4}>
                                            <CustomSimpleFormGroup name={"status"} value={search.status} type={"select"}
                                                                   data={
                                                                       statusList.map((row) => {
                                                                           return { value : row.name, label : row.label}
                                                                       })
                                                                   }
                                                                   defaultOption={true} defaultValue={""} defaultLabel={"Project status"}
                                                                   onChangeValue={(e) => handleChangeSearchValue(e)}/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={6}>
                                    <div className={"form-event-btn"}>
                                        <Button variant="contained" type={"submit"}>
                                            {t('projectListScreen.form.button.search')}
                                        </Button>
                                        <Button variant="outlined" onClick={handleResetSearchValue}>
                                            {t('projectListScreen.form.button.reset')}
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                        <Table hover bordered responsive className={"table"} >
                            <colgroup>
                                <col style={{width: '1%'}}/>
                                <col style={{width: '1%'}}/>
                                <col style={{minWidth: '50%'}}/>
                                <col style={{width: '15%'}}/>
                                <col style={{width: '20%'}}/>
                                <col style={{width: '15%'}}/>
                                <col style={{width: '1%'}}/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th></th>
                                <th>{t('projectListScreen.table.number')}</th>
                                <th>{t('projectListScreen.table.name')}</th>
                                <th>{t('projectListScreen.table.status')}</th>
                                <th>{t('projectListScreen.table.customer')}</th>
                                <th>{t('projectListScreen.table.startDate')}</th>
                                <th>{t('projectListScreen.table.delete')}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                projects.map((project, index) => (
                                    <tr key={index} style={project.isDelete ? {background: '#F0F0F0'} : {background: 'white'}}>
                                        <td>
                                            <Form.Check checked={project.isDelete} onChange={(e) => handleCheckTableRow(project.id, e.target.checked)}/>
                                        </td>
                                        <td style={{textAlign: 'right'}}><Link to={`/projects/edit/${project.id}`}>{project.number}</Link></td>
                                        <td>{project.name}</td>
                                        <td>{project.status.label}</td>
                                        <td>{project.customer}</td>
                                        <td>{project.startDate}</td>
                                        <td className={"delete-icon"}><button onClick={() => handleDelete(project.id)}>
                                            {
                                                project.status.name === "NEW" && (
                                                    <i className="fa fa-trash"/>
                                                )
                                            }
                                        </button></td>
                                    </tr>
                                ))
                            }
                            {
                                deleteMany > 0  ? (
                                    <>
                                        <td colSpan="6" className={"table-footer"}>
                                            <div>
                                                <span>{deleteMany} items selected</span>
                                                <span>Delete selected items</span>
                                            </div>
                                        </td>
                                        <td className={"delete-icon"}><button onClick={handleDeleteMany}><i className="fa fa-trash"/></button></td>
                                    </>
                                ) : null
                            }
                            </tbody>
                        </Table>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </div>
    );
};

export default ProjectsList;
