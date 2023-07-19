import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";



export default function Navbar(props){
  let modeImg= props.darkMode ? "moon-light.png" : "sun.png"
  let logo = props.darkMode ? "logo-white-final.png" : "logo-black.png"
  const styles={
    backgroundColor: props.darkMode? "black": "white",
    color: props.darkMode? "white": "black",
    border: props.darkMode? "1px solid white": "1px solid black"
  }


  return(
    <div>
      <nav className={props.darkMode? "dark": "navbar"}>
        <img className='logo' src={`/images/${logo}`}></img>
        <ul className='nav-list'>
        <li  className='home'>
          <Link
            activeClass ="active"
            spy={true}
            smooth={true}
            offset={-3000}
            duration={500}
            to = "home"
            activeClassName="selected"
            >
            Home
            </Link>
          </li>

          <li  className='nav-link'>
          <Link
            activeClass ="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            to = "about"
            activeClassName="selected"
            >
            About Us
            </Link>
          </li>

          <li  className='nav-link'>
          <Link
            activeClass ="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            to = "portfolio"
            activeClassName="selected"
            >
            Portfolio
            </Link>
          </li>
          
          <li  className='nav-link'>
          <Link
            activeClass ="active"
            spy={true}
            smooth={true}
            offset={2000}
            duration={1000}
            to = "contact"
            activeClassName="selected"
            >
            Contact
            </Link>
          </li>

          <img src= {`/images/${modeImg}`} onClick={props.toggleImg} className="toggleImg"/>
        </ul>
      </nav>
    </div>
  )
}