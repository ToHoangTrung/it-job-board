import React from 'react';
import {makeStyles} from "@material-ui/core";
import {Row, Col, Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import Button from "@material-ui/core/Button";
import {DefaultTheme, PolarGreenTheme} from "../../../theme";

const useStyles = makeStyles((props) => ({
    root: {
        border: '1px solid black',
        padding: 16,
    },
    left: {
      '& img': {
          width: '100%'
      }
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        justifyContent: "space-between",
    },
    row: {
        display: 'flex',
        justifyContent: "space-between",
    },
    applyBtn: {
        background: PolarGreenTheme.color6,
        color: 'white',
            '&:hover': {
                background: PolarGreenTheme.color7,
            }
    }
}))

const RecruitmentCard = ({recruitment}) => {

    const classes = useStyles();
    const [t] = useTranslation('common');

    return (
        <div className={classes.root}>
            <Container fluid>
                <Row>
                    <Col sm={2} style={{border: '1px solid black'}} className={classes.left}>
                        <img src={"https://preview.colorlib.com/theme/jobsco/assets/img/icon/1.svg"} alt={""}/>
                    </Col>
                    <Col sm={10} className={classes.info}>
                        <div className={classes.row}>
                            <h4>Automation Tester (1+ year)</h4>
                            <Button className={classes.applyBtn}>{t('recruitment-card.apply')}</Button>
                        </div>
                        <div className={classes.row}>
                            <p>OPSWAT Software Vietnam</p>
                            <p>Ho Chi Minh</p>
                        </div>
                        <div className={classes.row}>
                            <p>1 ngay truoc</p>
                            <p><i className="fas fa-bookmark"/>Fulltime</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RecruitmentCard;
