/**
 * App entry point
 */
// Polyfill
import 'babel-polyfill';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route , browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// Routes
import Login from './Login';
import Register from './Register';
import Quiz from './quiz';
import Navbar from './Navbar';
import ChildQues1 from './ChildQues1';
import ChildQues2 from './ChildQues2';
import ChildQues3 from './ChildQues3';
import ChildQues4 from './ChildQues4';
import style from '../styles/app.scss';
// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

// Render the router
ReactDOM.render((
  <Router history={browserHistory}>
    	<Route path='/login' component = {Login} > </Route>
    	<Route path='/register' component = {Register} > </Route>
    	<Route path='/quiz' component = {Quiz} > </Route> 
    	<Route path='child1' component = {ChildQues1} ></Route>
    	<Route path='child2' component = {ChildQues2} ></Route>
    	<Route path='child3' component = {ChildQues3} ></Route>
    	<Route path='child4' component = {ChildQues4} ></Route>
  </Router>
), document.getElementById(DOM_APP_EL_ID));

