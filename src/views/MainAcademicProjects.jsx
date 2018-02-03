

import React, { Component } from 'react';
import {
    Grid, Row, Col, Panel, Heading, Title, Body,
    ButtonGroup, ButtonToolbar
} from 'react-bootstrap';
import VideoPlayer from 'components/VideoPlayer.jsx'
import Button from 'elements/CustomButton/CustomButton.jsx';


import {CppButton, QtButton, OpencvButton} from 'elements/DefaultButtons.jsx';

class MainAcademicProjects extends Component {


    render() {
        return (

            <div className="content">
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">
                            Automatic Trajectory Control of Automated Guided Vehicles
                            </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        The project involved the use of searching algorithms and Digital Image Processing for the
                        intelligent control of Automated Guided Vehicles (AGV).
                        <br />
                        <br />
                        Technologies involved:
                        <br />
                        <br />
                        <Grid fluid>
                            <Row>
                                {/* <Col>
                                    <Button href="#" style={{color:"orange", borderWidth:"1px"}} bsStyle="default">
                                       asdffsa
                                    </Button>
                                </Col> */}

                                <ButtonToolbar>



                                    <ButtonGroup>
                                        <CppButton />
                                    </ButtonGroup>
                                    
                                    <ButtonGroup>
                                       <QtButton />
                                    </ButtonGroup>

                                    <ButtonGroup>
                                        <OpencvButton />
                                    </ButtonGroup>

                                    <ButtonGroup>
                                        <Button fill bsStyle="primary">
                                            A* Algorithm
                                    </Button>
                                    </ButtonGroup>
                                    
                                </ButtonToolbar>
                            </Row>
                        </Grid>
                        <br />
                        <br />
                        The following is a video of the
                        final result:

                        <br />
                        <br />
                        <VideoPlayer />
                    </Panel.Body>
                    {/* <Panel.Footer>Panel footer</Panel.Footer> */}
                </Panel>

            </div>
        );
    }
}

export default MainAcademicProjects;
