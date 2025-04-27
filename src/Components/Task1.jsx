import React from 'react'

function Task1() {
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Task 1</h1>
        <h1>Higher-Order Components (HOCs)</h1>

<p>In React, a Higher-Order Component is an advanced technique for reusing component logic. HOCs are functions that take a component as an argument, wrap it with additional functionality, and return the enhanced component.</p>

<p><strong>Key Points</strong></p>
<ul>
    <li><strong>Component Transformation:</strong> HOCs do not modify the original component. Instead, they create a new, enhanced component by composing the original component.</li>
    <li><strong>Reusability:</strong> HOCs enable you to extract common logic (e.g., state management, data fetching) that can be applied to multiple components, promoting cleaner code.</li>
     <li><strong>No Side Effects:</strong> HOCs are pure functions, meaning they don't directly modify the wrapped component.</li>
</ul>

<p><strong>Benefits of Using HOCs</strong></p>
<ul>
    <li><strong>Code Reusability:</strong> HOCs allow you to share common functionality across multiple components without duplicating code.</li>
    <li><strong>Logic Abstraction:</strong> They help in abstracting complex logic into reusable units, making components cleaner and easier to manage.</li>
    <li><strong>Enhanced Functionality:</strong> HOCs can add features like authentication, logging, or data fetching to components.</li>
    <li><strong>Composition:</strong> HOCs can be chained together to combine multiple functionalities.</li>
</ul>
<hr></hr>
    </div>
  )
}

export default Task1