import React from "react";
import "./style.css";
import Comp from './Comp';
export default function App() {
  
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div className='container'>
        <Comp/>
        <Comp/>
        <Comp/>
        <Comp/>
        <Comp/>
      </div>
    </div>
  );
}
