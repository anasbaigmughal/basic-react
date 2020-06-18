import React from 'react';
////import logo from './logo.svg';
import './App.css';
import Hello from './Hello'; ////to make use of Hello.js
import ReactAssignment from './ReactAssignment'; ////to make use of Assignment.js

/*
const helloF = (name) => "Hello World "+name;
//above function iis short form of below function
function helloF1(name){
  return "Hello World "+name;
}
*/

//function App({ name, age }) { ////without destructuring
function App(props) { ////we could name props anything
  //let user={name: "Muhammad Anas Baig", age: 23};

  ////let {name,  age} = user; ////destructuring //new style, same as below 2 lines //will extract name property from user and assigns it to name and so on and now you can use it directly

  ////let name = user.name; ////old style
  ////let age = user.age; ////old style

  return <div>
    <h2><u>Class Work:</u></h2>
    Hello World from App.js by {props.name} whose age is {props.age}
    <br/>
    <Hello firstName={props.name}></Hello>
    <h2><u>DIY Assignment:</u></h2><a href="https://github.com/anasbaigmughal/bootcamp2020-basic-react-part1">Repository Link</a><br/><br/>
    <ReactAssignment name="Muhammad Anas Baig"/>
    </div> ////only nested divs allowed, we are returning JSX which is JavaScript XML
}

export default App;
