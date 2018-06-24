
import React, { Component } from 'react';
import {
    Grid, Row, Col, Panel, Heading, Title, Body,
    ButtonGroup, ButtonToolbar, Media, Image
} from 'react-bootstrap';

import utfprLogo from 'assets/img/utfpr.webp';
import uobLogo from 'assets/img/uob.png';
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


class Education extends Component {


    render() {
        return (

            <div style={{ margin: "0 auto" }} className="content">
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">
                            Undergraduate
                            </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Media>
                            <Media.Left>
                                <img width={128} height={128} src={utfprLogo} alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>Federal University of Technology – Parana</Media.Heading>
                                <div>
                                    <p>
                                        Computer Engineering - Five years undergraduate course
                                        {/* <Link to="/mainacademicprojects#AutomaticTrajectory2">Your link text</Link> */}

                                    {/* <NavLink
                                            to={"/mainacademicprojects#AutomaticTrajectory4"}
                                            className="nav-link"
                                            activeClassName="active"
                                        // style={{ color: '#000' }} 
                                        >
                                            For more information click here
                                    </NavLink> */}
                                    </p>

                                </div>
                            </Media.Body>
                        </Media>

                        <Media>
                            <Media.Left>
                                <img width={128} height={128} src={uobLogo} alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>University of Birmingham</Media.Heading>
                                <p>
                                    Computer Science/Software Engineering - One year undergraduate study abroad
                                </p>
                            </Media.Body>
                        </Media>
                    </Panel.Body>
                    {/* <Panel.Footer>Panel footer</Panel.Footer> */}
                </Panel>

            </div>
        );
    }
}

export default Education;
