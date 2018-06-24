

import React, { Component } from 'react';
import {
    Grid, Row, Col, Panel, Heading, Title, Body,
    ButtonGroup, ButtonToolbar
} from 'react-bootstrap';
import { Document, Page, Outline } from 'react-pdf';
import abc from "assets/pdfs/8001.pdf"
import {DevelopmentWarning} from "elements/DevelopmentWarning.jsx"


class AcademicResearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numPages: null,
            pageNumber: 1,
        }
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages: numPages });
    }
    render() {
        return (

            <div className="content">
                         <DevelopmentWarning />

                <div style={{maxHeight:"842px", overflowY: "scroll"}}>
                <Document
                    file={abc}
                    onLoadSuccess={this.onDocumentLoad}
                >
                <Outline />

                         {
                Array.from(
                  new Array(this.state.numPages),
                  (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      
                    />
                  ),
                )
              }
                </Document>
                
                </div>
            </div>
        );
    }
}

export default AcademicResearch;
