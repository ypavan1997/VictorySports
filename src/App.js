import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Layout from './components/Layout'
import {Routes} from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Routes/>
        </Layout>
      </div>
    );
  }
}

export default App;
