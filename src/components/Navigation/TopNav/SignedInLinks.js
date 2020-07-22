import React from "react";
import { NavLink } from "react-router-dom";


const SignedInLinks = () => {
  return (
<ul className="right">
    <li><NavLink to='/MyPage'>My Page</NavLink></li>
    <li><NavLink to='/'>Log Out</NavLink></li>
    <li><NavLink to='/' className='btn-floating center  pink lighten-1'>MN</NavLink></li>
    
</ul>
  );
};

export default SignedInLinks;
