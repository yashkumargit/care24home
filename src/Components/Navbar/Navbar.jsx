import React, { useState } from 'react';
import './Navbar.css';
import logo from "../Assets/logo.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu("AboutUs")} className={menu === "AboutUs" ? 'active' : ''}>
          About us
          {menu === "AboutUs" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("Services")} className={menu === "Services" ? 'active' : ''}>
          Services
          {menu === "Services" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("Blogs")} className={menu === "Blogs" ? 'active' : ''}>
          Blogs
          {menu === "Blogs" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("Booknow")} className={menu === "Booknow" ? 'active' : ''}>
          Book now
          {menu === "Booknow" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-call">
        <p>Call Us - 9870552907</p>
      </div>
    </div>
  );
};

export default Navbar;
