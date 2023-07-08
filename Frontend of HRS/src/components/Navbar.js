import React, { Component, useState } from "react";
import logo from '../images/Hotel_Indigo_logo.png';
import { FaAlignRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
// import logos from '../images/justifyright.svg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Room from '../pages/Cart';
import { Button } from "bootstrap";


export default class Navbar extends Component {
 constructor(props){
  super(props);
  this.state={
    numberFromUrl:null,
    // slug:this.props.match.params.slug
  };
 }

  state = {
    isOpen: false
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.setState.isOpen })
  }
  render() {
    var newName=JSON.parse(localStorage.getItem("Data"));
    console.log(newName===undefined);
    if(newName!=undefined)
    {
       newName=JSON.parse(localStorage.getItem("Data"));
      console.log(newName);
      var crname=newName.name;
      var visitor=newName.role;
      console.log(visitor==="USER");
      console.log(visitor==="ADMIN");
    }
    // const newName=JSON.parse(localStorage.getItem("Data"));
    // console.log(newName.name);
    // const news=newName.name;
    // const clientrole=newName.role;
    // console.log(clientrole);
    // const newrole=JSON.parse(localStorage.getItem("Data"));
    // const {id,name,email,password,contactno,role}=newrole;
    // console.log(newrole.role);
    // var a=newrole.role==="ADMIN";
    // var b=newrole.role==="USER";
    // console.log();
    if(newName===undefined || newName===null)
    {
      return (
        <div>
          <nav className="navbar">
  
            <div className="nav-center">
              <div className="nav-header">
                <Link to="/" color="black">
                  <img src={logo} height="45px" width="120px" ></img>
                </Link>
                <button
                  type="button"
                  className="nav-btn"
                  onClick={this.handleToggle}
                >
                  <FaAlignRight className="nav-icon" />
                </button>
  
              </div>
              <ul
                className={this.state.isOpen ? "nav-links show-nav" : "nav-links "}
              >
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/rooms">Rooms</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                {/* <li>
                  <Link to="/contact">Reach Us</Link>
                </li> */}
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup" >Register</Link>
                </li>
                
                <label for="login" style={{"marginLeft":"240px","color":"darkblue"}}><AccountCircleIcon /></label>
                <Link style={{"width":"35px","color":"darkblue","padding":"0px 40px"}} to="/profile" className="navName"></Link>
                
                {/* to={`/room/${slug1}`} */}
                <Link >
                <li style={{ marginLeft: "15px",color:"red" }}><FavoriteBorderIcon /></li></Link>
              
              </ul>
              
            </div>
  
          </nav>
  
        </div>
      );
    }
    else if(visitor==="ADMIN"){
      return (
        <div>
          <nav className="navbar">
  
            <div className="nav-center">
              <div className="nav-header">
                <Link to="/" color="black">
                  <img src={logo} height="45px" width="120px" ></img>
                </Link>
                <button
                  type="button"
                  className="nav-btn"
                  onClick={this.handleToggle}
                >
                  <FaAlignRight className="nav-icon" />
                </button>
  
              </div>
              <ul
                className={this.state.isOpen ? "nav-links show-nav" : "nav-links "}
              >
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/rooms">Rooms</Link>
                </li>
                <li>
                  <Link to="/client">Clients</Link>
                </li>
                <li>
                  <Link to="/booking">Bookings</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                {/* <li>
                  <Link to="/signup" >Register</Link>
                </li> */}
               <li>
                <label for="login" style={{"marginLeft":"350px","color":"darkblue"}}><AccountCircleIcon /></label></li>
                <Link style={{"width":"35px","color":"darkblue","padding":"0px 35px"}} to="/profile" className="navName">{crname}</Link>
                
                {/* to={`/room/${slug1}`} */}
                {/* <Link >
                <li style={{ "marginRight": "0px" }}><FavoriteBorderIcon /></li></Link> */}
              
              </ul>
              
            </div>
  
          </nav>
  
        </div>
      );
    }
    else if(visitor === "USER"){
      return (
        <div>
          <nav className="navbar">
  
            <div className="nav-center">
              <div className="nav-header">
                <Link to="/" color="black">
                  <img src={logo} height="45px" width="120px" ></img>
                </Link>
                <button
                  type="button"
                  className="nav-btn"
                  onClick={this.handleToggle}
                >
                  <FaAlignRight className="nav-icon" />
                </button>
  
              </div>
              <ul
                className={this.state.isOpen ? "nav-links show-nav" : "nav-links "}
              >
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/rooms">Rooms</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Reach Us</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup" >Register</Link>
                </li>
                
                <label for="login" style={{"marginLeft":"240px","color":"darkblue"}}><AccountCircleIcon /></label>
                <Link style={{"width":"35px","color":"darkblue","padding":"0px 35px"}} to="/profile" className="navName">{crname}</Link>
                
                {/* to={`/room/${slug1}`} */}
                <Link >
                <li style={{ marginLeft: "15px",color:"red" }}><FavoriteBorderIcon /></li></Link>
              
              </ul>
              
            </div>
  
          </nav>
  
        </div>
      );
    }
    
  }

}