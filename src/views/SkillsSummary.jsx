

import React, { Component } from 'react';
import {
    Grid, Row, Col, Panel, Heading, Title, Body,
    ButtonGroup, ButtonToolbar
} from 'react-bootstrap';
import Button from 'elements/CustomButton/CustomButton.jsx';


import {
    CppButton, QtButton, OpencvButton, CsharpButton,
    JavaButton, PythonButton, ClangButton, RpiButton, 
    ArduinoButton, ArmButton
} from 'elements/DefaultButtons.jsx';

import "assets/css/skill-div.css"
import {DevelopmentWarning} from "elements/DevelopmentWarning.jsx"

class SkillsSummary extends Component {


    render() {
        return (

            <div className="content">
                                   <DevelopmentWarning />

                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">
                            Software Skills
                            </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Grid fluid>
                            <Row>
                                
                                <ButtonToolbar>

                                    <ButtonGroup>
                                        <ClangButton />
                                    </ButtonGroup>


                                    <ButtonGroup>
                                        <CppButton />
                                    </ButtonGroup>

                                    <ButtonGroup>
                                        <PythonButton />
                                    </ButtonGroup>

                                    <ButtonGroup>
                                        <CsharpButton />
                                    </ButtonGroup>

                                    <ButtonGroup>
                                        <JavaButton />
                                    </ButtonGroup>

                                    <ButtonGroup>
                                        <QtButton />
                                    </ButtonGroup>

                                    <ButtonGroup>
                                        <OpencvButton />
                                    </ButtonGroup>




                                </ButtonToolbar>
                            </Row>
                        </Grid>
                    </Panel.Body>
                    {/* <Panel.Footer>Panel footer</Panel.Footer> */}
                </Panel>




                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">
                            Hardware Skills
                            </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Grid fluid>
                            <Row>
                                <ButtonToolbar>
                                

                                <ButtonGroup>
                                        <ArduinoButton />
                                    </ButtonGroup>

                                    <ButtonGroup>
                                        <ArmButton />
                                    </ButtonGroup>
                                    
                                    <ButtonGroup>
                                        <RpiButton />
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </Row>
                        </Grid>
                    </Panel.Body>
                    {/* <Panel.Footer>Panel footer</Panel.Footer> */}
                </Panel>
            </div>
        );
    }
}

export default SkillsSummary;
