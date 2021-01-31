import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
 
function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand><Link style={{color:"white"}} to="/">Memovercity</Link></Navbar.Brand>
        <Nav className="mr-auto">
        <NavLink to="/" activeStyle={{color:"white"}} style={{color:"white"}}>Home </NavLink>
        </Nav>
        <div style={{display:"flex"}} >
        <p style={{margin:"auto", marginRight:15, color:"white"}}>Bayram Utku</p>
          <img alt="avatar" src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png"
            style={{width:35, height:35, borderRadius:45, margin:"auto"}}
          ></img>
        </div>
      </Navbar>
    )
}

export default NavbarComponent
