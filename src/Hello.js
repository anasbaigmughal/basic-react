import React from 'react';
import './App.css';
import './Hello.css'

function Hello(props){
    return <p className="changeBackground">This a line in Hello.js and it is getting name via properties as: {props.firstName}</p>
  }

export default Hello; ////to make it usable for outside world