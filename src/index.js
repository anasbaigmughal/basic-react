import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

////the starting point of the app, ReactDOM.render is JS and inside less than sign is JSX
ReactDOM.render(
  //<div> Hello World</div>,
  //React.createElement('div', null, "Hello World"), ////what actually happens in above statement, null  is properties of  tag, if  start letter is lowercase then it is html tag but if it is uppercase then it is custom tag
  ///React.createElement('div', null, React.createElement('span', null, "Hello World")), //nested tag of span
  //<div><App/></div>,
  <div><App name="Muhammad Anas Baig" age={22}></App></div>, ////in JSX in curly braces it think it as JavaScript, so for expression calculation we will use curly braces
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
