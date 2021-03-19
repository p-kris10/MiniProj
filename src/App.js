import { PropTypes } from 'prop-types';
import React,{ Component } from 'react';
import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import Routes from './Routes';
import AlertDismissable from './components/AlertDismissable';
function App(props) {
  const reloadMsg = `
      Update available.<br />
      Please <a href='javascript:location.reload();'>reload</a>.<br />
      <small>If reloading doesn't work, close all tabs/windows of this web application,
      and then reopen the application.</small>
    `;
   const [showUpdateAlert,setUpdateAlert] = useState(true);
   const updateAvailable = props.updateAvailable;
   const dismissUpdateAlert = event => {
    setUpdateAlert(false);
  }
  return (
    
    <div className="App">
          <Container>
            <Navbar collapseOnSelect className="app-nav-bar" variant="dark" expand="lg">
              <Navbar.Brand href="/">DisDetect</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <Link className="nav-link" to="/">Detect</Link>
                  <Link className="nav-link" to="/about">About</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {updateAvailable && showUpdateAlert &&
              <div style={{paddingTop: '10px'}}>
                <AlertDismissable
                  title=""
                  variant="info"
                  message={reloadMsg}
                  show={updateAvailable && showUpdateAlert}
                  onClose={dismissUpdateAlert} />
              </div>
            }
          </Container>
          <Container>
            <Routes />
          </Container>
        </div>
  );
}

export default App;
