import {useContext} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import MainContext from '../../contexts/MainContext';
import axios from 'axios';
const Logout = "https://memovercity.herokuapp.com/user/logout";
function NavbarComponent() {
  const {name, isLoggedIn,setLogin} = useContext(MainContext);

  const handleLogout = () => {
    console.log("Clicked");
    
    axios.get(Logout).then((res) => {
      if(res.status === 200) setLogin(false);
    })
    setLogin(false);
    window.location.href = "/";
  }



    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand><Link style={{color:"white"}} to="/">Memovercity</Link></Navbar.Brand>
        <Nav className="mr-auto">
        <NavLink to="/" activeStyle={{color:"white"}} style={{color:"white"}}>Home </NavLink>
        </Nav>
        {isLoggedIn ? <div style={{display:"flex"}} >
        <p onClick={handleLogout} style={{margin:"auto", marginRight:15, color:"white"}}>{name}</p>
          <img alt="avatar" src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png"
            style={{width:35, height:35, borderRadius:45, margin:"auto"}}
          ></img>
        </div> : <div>
          <Link style={{color:"white"}} to="/login">Login</Link><Link style={{marginLeft:15, color:"white"}} to="/signup">Signup</Link>
          </div>}
      </Navbar>
    )
}

export default NavbarComponent
