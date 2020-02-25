import React from "react";
import { NavLink } from "react-router-dom"; //monta urls com funcionalidade ativo/desativado

// rafc for autocomplete
const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
