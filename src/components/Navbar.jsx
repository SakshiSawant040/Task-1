import React from 'react'
import '../css/navbar.css'
import logo from '../images/powerpro.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={logo} alt="logo" />
            <h1>powerpro</h1>
        </div>
        <div className="options">
            <ul className='nav-options'>
                <li>
                    Product
                    <span><KeyboardArrowDownIcon/></span>
                </li>
                <li>
                    Resource
                    <span><KeyboardArrowDownIcon/></span>
                </li>
                <li>
                    Tool
                    <span><KeyboardArrowDownIcon/></span>
                </li>

            </ul>

        </div>
        <div className="signIn">
            <button className='signIn-btn'>Sign In</button>
            <button className='contact-btn'><h1> Contact Sales </h1></button>
        </div>

    </div>
  )
}

export default Navbar
