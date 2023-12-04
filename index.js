import React from "react";
import ReactDom from "react-dom";

ReactDom.render( 
<div>
  <h1  className ="heading">My favourite Movies!</h1> 
  <ul> 
    <li>Friends</li> 
    <li>Summer Vacation </li>
    <li> Tom And Jerry </li> 
    <li>MY Demon</li>
   </ul>
</div>
     , document.getElementById("root"));
     
//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 li>st elements.
