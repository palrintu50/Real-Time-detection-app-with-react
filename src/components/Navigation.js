import React from 'react';
import '../App.css';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="Nav">
          <NavLink className="active" to="/">Home</NavLink>
          <NavLink to="/visualdetection">VisualDetection</NavLink>
          <NavLink to="/exampledetection">Examples</NavLink>
       </div>
    );
}
 
export default Navigation;