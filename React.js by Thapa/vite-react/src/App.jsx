// import React from "react";
 import {Fragment} from "react";
function App() {

  return (
    <Fragment>
    <Details/>
    <Details/>
    <Details/>
    <Details/>
    <Details/>
  </Fragment>
  )
}

const Details=()=>
{
 return  <table border="1">
      <thead>
        <tr><td>Name</td><td>Shivam Kumar</td></tr>
      </thead>
      <tbody>
        <tr><td>Course</td><td>B.Tech</td></tr>
        <tr><td>Branch</td><td>Computer Science and Engineering</td></tr>
        <tr><td>Roll No.</td><td>2200534</td></tr>
        <tr><td>Age</td><td>21</td></tr>
      </tbody>
     </table>
}

export default App
