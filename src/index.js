import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './Component/header';
import Content from './Component/content'
import App from './App';
import {HashRouter as Router,Route,Link,BrowserRouter} from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


ReactDOM.render(<App></App>,document.getElementById('root'))
  
