

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx'



class Certifications extends Component {

    componentWillMount () {
        const script = document.createElement("script");
        script.type  = 'text/javascript';
        script.src =  '//cdn.youracclaim.com/assets/utilities/embed.js';
        script.async = true;
        var o = document.getElementsByTagName('script')[0];
        o.parentNode.insertBefore(script, o);
        document.body.appendChild(script);
    }
    render() {
        return (
            <div className="content">
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="9de3f381-ea78-4f35-ac4c-90a4194acf15"></div>
{/* <script type="text/javascript">
  (function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//cdn.youracclaim.com/assets/utilities/embed.js';
    var o = document.getElementsByTagName('script')[0];
    o.parentNode.insertBefore(s, o);
    })();
</script> */}
            </div>
        );
    }
}

export default Certifications;
