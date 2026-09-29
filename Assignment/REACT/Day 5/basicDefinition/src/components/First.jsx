import React from 'react'

const First = () => {
  return (
    <div>
     <ol>
        <li>Difference Between var, let, and const</li>

        <p>var is a global scope , suppose if we want a private variable we cant use var bcz var can be changed anywhere so we avaoid var. </p>
        <p>const - if we dont want to change the value assigned to it ,we can use constant key word which is const.</p>
        <p>let- Block scoped . if we want to redeclare and reassign we can use let .</p>
        <li> Difference Between JavaScript, React, and Angular</li>
        <p> javascript - programming language . it gives me the logic to build apps.If i use only the js i need to manually manipulate the dom whenever the datachanges.</p>
        <p>React is a JavaScript library mainly used for building user interfaces. Instead of updating the DOM manually, React uses the Virtual DOM and updates only the changed part, making applications faster and easier to maintain.</p>
       <p>Angular is a complete framework. It already provides routing, forms, dependency injection and many other features. It is suitable for large enterprise applications where everything is available in one package.</p>
       
        <li>If I Build a Car</li>
        <p>When I build a car object, I store its properties like brand, engine and color as key-value pairs. Any action the car performs, such as starting, stopping or accelerating, is written as methods inside the object.</p>
        <li>Es6+ Features</li>
        <p>1.Arrow Function -rrow functions provide a shorter syntax and don't create their own this, which makes them convenient in React components and callbacks. </p>
<p>2.Destructuring - extract required values from an object or array, making the code cleaner and reducing repeated object access.</p>
<p>3.Spread Operator- copy from the original data ,avoid direct changes in original data. coz state should be updated not modified.</p>
<p>4.Template Literals-Template literals make string creation more readable and allow me to embed variables directly using ${}. </p>
        <li>Difference Between DOM and React</li>
        <p>Dom- in js i manually manipulate dom by using methods . In react i dont update mannualy i have virtual dom that works for me . Virtual dom updates the neccessary elements . </p>
     </ol>
    </div>
  )
}

export default First
