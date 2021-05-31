import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../Component/Header';
import Navigation from '../Component/Navigation';
import ErrorScreen from './ErrorScreen';
import {makeStyles} from "@material-ui/core";
import NewProject from "./NewProject";
import ProjectsList from "./ProjectsList";
import EditProject from "./EditProject";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 100
    },
}));

const MainPage = () => {

    const [spacing] = useState(2);
    const classes = useStyles(spacing);

    return (
        <div className={classes.root}>
            <Container fluid>
                <BrowserRouter>
                    <Row>
                        <Col>
                            <Header/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={1}/>
                        <Col xl={2}>
                            <Navigation/>
                        </Col>
                        <Col xl={9} style={{padding: 0, paddingTop: 32}}>
                            <Route path="/projects/new" component={NewProject}/>
                            <Route path="/projects/edit/:projectId" component={EditProject}/>
                            <Route path="/projects" component={ProjectsList} exact/>
                            <Route path="/error" component={ErrorScreen}/>
                        </Col>
                    </Row>
                </BrowserRouter>
            </Container>
        </div>
    );
};

export default MainPage;
