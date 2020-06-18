import React from 'react';
import './App.css';
import './ReactAssignment.css'

function ReactAssignment(props){
    return <div>
      <strong><u>Task1:</u> Change the text "Hello World!" to say "Hello {"<your name>!"}</strong>
      <br/>
      <strong><u>Solution:</u></strong><br/>Hello World {props.name}!
      <br/><br/>

      <strong><u>Task2:</u> Bold your name by wrapping it in a {"<strong>"} tag. It works just like HTML.</strong> 
      <br/>
      <strong><u>Solution:</u></strong><br/>Hello World! <strong>{props.name}</strong>
      <br/><br/>
      
      <strong><u>Task3:</u> Inside the {"<div>"}, and under your name, add some other HTML elements. Headings, ordered and unordered lists, etc. Get a feel for how it works. How does it handle whitespace? What happens if you forget to close a tag?</strong>
      <br/>
      <strong><u>Solution:</u></strong><h3>This is heading inside JSX content</h3>
      This is Ordered List:
      <br/>
      <ol>
          <li>Ordered List Item 1</li>
          <li>Ordered List Item 2</li>
          <li>Ordered List Item 3</li>
      </ol> 
      This Unordered List:
      <br/>
      <ul>
          <li>Unordered List Item 1</li>
          <li>Unordered List Item 2</li>
          <li>Unordered List Item 3</li>
      </ul> 

      <strong><u>Task4:</u> I mentioned that you can put real JS code inside the JSX. Try that out: inside the div, insert a JS expression surrounded with single braces, like {"{5 + 10}"}.</strong>
      <br/>
      <strong><u>Solution:</u></strong><br/>This is the result of JS code expression inside JSX: {10+5}
      <br/><br/>

      <strong><u>Task5:</u> Want to style it with CSS? Instead of using the “class” property like you would in HTML, use “className”. Then create a file src/index.css with the styles, and add the line import './index.css' to the top of index.js. Yep, you can import CSS into JS. Sorta. That’s Webpack working its magic behind the scenes.</strong>
      <br/>
      <strong><u>Solution:</u></strong><br/><div className="changeBackgroundColor">This text is styled using CSS in JSX via className property</div>
      <br/><br/>

    </div>
  }

export default ReactAssignment; ////to make it usable for outside world