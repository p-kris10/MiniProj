import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';



class Index extends Component {
  state = {
    contentCached: false,
    updateAvailable: false,
  };

  render() {
    return (
      <Router>
        <App updateAvailable={this.state.updateAvailable} />
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
