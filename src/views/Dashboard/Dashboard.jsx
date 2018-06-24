import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import {
    Grid, Row, Col, Panel, Heading, Title, Body,
    ButtonGroup, ButtonToolbar
} from 'react-bootstrap';

import { Card } from 'components/Card/Card.jsx';
import { StatsCard } from 'components/StatsCard/StatsCard.jsx';
import { Tasks } from 'components/Tasks/Tasks.jsx';
import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
    dataBar,
    optionsBar,
    responsiveBar,
    legendBar
} from 'variables/Variables.jsx';

import { FormInputs } from 'components/FormInputs/FormInputs.jsx';
import { UserCard } from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

import {DevelopmentWarning} from "elements/DevelopmentWarning.jsx"

import avatar from "assets/img/faces/foto.JPG";

class Dashboard extends Component {
    createLegend(json) {
        var legend = [];
        for (var i = 0; i < json["names"].length; i++) {
            var type = "fa fa-circle text-" + json["types"][i];
            legend.push(
                <i className={type} key={i}></i>
            );
            legend.push(" ");
            legend.push(
                json["names"][i]
            );
        }
        return legend;
    }
    render() {
        return (
            <div className="content">
             <DevelopmentWarning />
                      
                    <UserCard
                        // bgImage="https://www.gocosmos.org/wp-content/uploads/2017/01/Cosmos3.jpg"
                        avatar={avatar}
                        name="Andre Luiz Costantino Botta"
                        userName="alcbotta"
                        description={
                            <div>
                           
<div style={{textAlign: "left"}}>
<br />
<div style={{
          margin: "auto", width: "70%", height: "7px",
          backgroundImage: "linear-gradient(to right, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%)",
          borderRadius: "30px"
        }} />


        <br />
<div>
Software engineer with a background in Machine Learning, Computer Vision and Robotics, currently expanding my skills to full stack development.
    
    My most recent projects include:
    <ul >
    <li>Development of a Web Portal for the end user of an Internet of Things(IoT) Plarform focused on the automation of a farm;</li>
{/* link to professional experience */}
    <li>Development of a Web Portal for accouting and sales manangement.</li>
    </ul>
    </div>
    </div>
    </div>
                        }
                    // socials={
                    //     <div>
                    //         <Button href="https://www.facebook.com/andreluiz.constantinobotta" target="_target" simple><i className="fa fa-facebook-square"></i></Button>

                    //         <Button simple><i className="fa fa-google-plus-square"></i></Button>
                    //     </div>
                    // }
                    />
            </div>
            
        );
    }
}

export default Dashboard;
