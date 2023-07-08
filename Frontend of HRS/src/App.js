// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {Router,Switch,Route } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Fillup from './pages/Fillup';
import Navbar from './components/Navbar';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Contact from './pages/Contact.';
import About from './pages/About';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Clients from './pages/Clients';
import Bookings from './pages/Bookings';
// import Layout from './components/Layout';

function App() {
  return (
    <>
    <div>
    <ToastContainer position='top-center'/>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/rooms" exact component={Rooms}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={SignUp}/>
         <Route path="/about" exact component={About}/>
         <Route path="/profile" exact component={Profile}/>
         <Route path="/booking" exact component={Bookings}/>
         <Route path="/contact" exact component={Contact}/>
         <Route path="/client" exact component={Clients}/>
          <Route path="/fillup/:slug" exact component={Fillup}/>
          <Route path="/room/:slug" exact component={Cart}></Route>
          <Route path="/rooms/:slug" exact component={SingleRoom}/>
          
          <Route component={Error}/>
        </Switch> 
        <Footer/>
     </div>
    
    </>
  );
}

export default App;
