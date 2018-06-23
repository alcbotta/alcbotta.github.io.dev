import React, {Component} from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';


class HeaderLinks extends Component{
    render(){
        const notification = (
            <div>
                <i className="fa fa-globe"></i>
                <b className="caret"></b>
                <span className="notification">5</span>
                <p className="hidden-lg hidden-md">Notification</p>
            </div>
        );
        return (
        //     <div className="navbar navbar-fixed-top" role="navigation" >
        //     <nav className="navbar-inner header">
              
        //       <div className="container">
        //         <div className="navbar-brand">
        //           <a href="#" > YOUR NAME HERE </a>
        //         </div>
        //         <ul className="nav navbar-nav pull-right">
        //           <li>
        //             <a href="#" className="navbar-brand">
        //               Resume 
        //             </a>
        //           </li>
        //           <li>
        //             <a href="#" className="navbar-brand">
        //               Contact
        //             </a>
        //           </li>
        //           <li>
        //             <a href="#" className="navbar-brand">
        //               <i className="fa fa-github"></i>
        //             </a>
        //           </li>
        //           <li>
        //             <a href="#" className="navbar-brand">
        //               <i className="fa fa-linkedin-square"></i>
        //             </a>
        //           </li>
        //           <li>
        //             <a href="#" className="navbar-brand">
        //               <i className="fa fa-angellist"></i>
        //             </a>
        //           </li>
        //           </ul>
        //       </div>
        //       </nav>
        //   </div>
            <div>
                <Nav pullRight>
                    <NavItem eventKey={1} href="https://drive.google.com/file/d/1DvirRtde8BrvTYtXfiko5TtrsW3lTmua/view?usp=sharing" target="_blank">
                    <div style={{minHeight: 20}}>
                    <li>
                        <i className="fa fa-file-text">
                        </i>
                        </li>
                     </div>
                    </NavItem>
                    <NavItem eventKey={2} href="https://github.com/alcbotta" target="_blank">
                        {/* <i className="fa fa-dashboard"></i>
                        <p className="hidden-lg hidden-md">Dashboard</p> */}
                        <div style={{minHeight: 20}}>
                        <li>
                        <i className="fa fa-github"></i>
                        </li>
                        </div>
                    </NavItem>

                    <NavItem eventKey={3}  href="https://www.linkedin.com/in/andrebotta/" target="_blank">
                        {/* <i className="fa fa-dashboard"></i>
                        <p className="hidden-lg hidden-md">Dashboard</p> */}
                        <div style={{minHeight: 20}}>
                        <li>
                        <i className="fa fa-linkedin"></i>
                        </li>
                        </div>
                    </NavItem>
                    {/* <NavItem eventKey={3} href="#">
                        <i className="fa fa-search"></i>
                        <p className="hidden-lg hidden-md">Search</p>
                    </NavItem> */}
            {/* //         <NavDropdown eventKey={2} title={notification} noCaret id="basic-nav-dropdown">
            //             <MenuItem eventKey={2.1}>Notification 1</MenuItem>
            //             <MenuItem eventKey={2.2}>Notification 2</MenuItem>
            //             <MenuItem eventKey={2.3}>Notification 3</MenuItem>
            //             <MenuItem eventKey={2.4}>Notification 4</MenuItem>
            //             <MenuItem eventKey={2.5}>Another notifications</MenuItem>
            //         </NavDropdown>
                   
            //     </Nav>
            //     <Nav pullRight>
            //         <NavItem eventKey={1} href="#">Account</NavItem>
            //         <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown-right">
            //             <MenuItem eventKey={2.1}>Action</MenuItem>
            //             <MenuItem eventKey={2.2}>Another action</MenuItem>
            //             <MenuItem eventKey={2.3}>Something</MenuItem>
            //             <MenuItem eventKey={2.4}>Another action</MenuItem>
            //             <MenuItem eventKey={2.5}>Something</MenuItem>
            //             <MenuItem divider />
            //             <MenuItem eventKey={2.5}>Separated link</MenuItem>
            //         </NavDropdown>
            //         <NavItem eventKey={3} href="#">Log out</NavItem> */}
                 </Nav>
             </div>
        );
    }
}

export default HeaderLinks;
