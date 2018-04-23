/*Author: ABHISHEK*/
/*Explanation: Component is written to render the Home page.*/

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './homePage.css';
import hpr from './homePageResponsive.css';
import fonts from '../css/fonts.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
   }

   getInitialState() {
   }

   componentDidMount () {
      document.title = "React Redux";
    }

    componentWillUnmount() {
      
    }

  
  render() {
    return (
      <div>Hello</div>  
      )
  }
}


export default HomePage;
