// import React from "react";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link,useHistory } from "react-router-dom";
import clienthelper from '../service/helper';
import { toast } from 'react-toastify';
import axios from "axios";
import { Co2Sharp, PropaneSharp } from "@mui/icons-material";
import Navbar from "../components/Navbar";



const Login=({})=>{

    const [arr,setarr]=useState({
        email:"",
        password:""});
    let history=useHistory();
    const[data,setData]=useState([])
    const[client,setClient]=useState([]);


    const handleChange=(event)=>{
        const{name,value}=event.target;
        setarr({...arr,[name]:value});

        console.log(event.target.name)
        
    }
    const validateData=(e)=>{
        const{email,password}=arr;
         if(email===" ")
        {
            toast.error("Enter valid email details")
        }else if(!email.includes('@'))
        {
            toast.error("Email should contain '@' type data")
        }else if(password===" ")
        {
            toast.error("Enter password details")
        }else{
            clienthelper.validateClient(arr).then((res)=>{
                console.log(res.data);
            clienthelper.getByEMail(arr.email).then((ress)=>{
                localStorage.setItem("Data",JSON.stringify(ress.data));
                localStorage.setItem("Uname",ress.data.name);
                console.log(localStorage.setItem("Uname",ress.data.name));
                // localStorage.setItem("Uemail",ress.data.email);
                // localStorage.setItem("UPass",ress.data.password);
               
                
            })
                localStorage.clear();
                localStorage.clear();
                history.push("/rooms");
                window.location.reload("/rooms");
                toast.success("Logged in Successfully",{autoClose:30000});
                
                // setClient(res.data);
                // console.log(client);
                // localStorage.setClient("client",JSON.stringify(client.data));
                // history.push("/rooms");
                // return <Navbar newone={client}></Navbar>
                // history.push("/login");
                 
            }).catch((err)=>{
                toast.error("Enter valid credentials");
                history.push("/login");
                
            })
    }
}

    return(
        <>
            <Hero>
            <Banner title="Login" >
                <form method="POST">
                    
                    <label htmlFor="email" className="form-group">Enter Email</label>
                    <input style={{"backgroundColor":"white","color":"black","textTransform":"initial","height":"28px"}} type="email" name="email" id="email" className="form-control" value={arr.email}
                    onChange={handleChange}
                    placeholder="Enter Email" required class="resizedTextbox" autoFocus></input>
                   
                   <br></br>
                    <label htmlFor="password" className="form-group">Enter Password</label>
                    <input style={{"backgroundColor":"white","color":"black","textTransform":"initial","height":"28px"}}  type="password" name="password" id="password" className="form-control" value={arr.password}
                    onChange={handleChange}
                    placeholder="Enter Passowrd" required class="resizedTextbox"></input>
                   
                   <br></br>
                    <Link >
                    <button style={{"padding":"10px"}} type="submit" name="btn" id="btn" className="btn btn-primary" onClick={validateData}>Login</button>
                    </Link><br></br>
                    <sub>Don't have an Account <Link to="/signup" style={{"color":"gold"}}><b>Register</b></Link></sub>
                    {/* <Link to="/signup">
                    <button style={{"padding":"10px","marginLeft":"10px"}} name="btn" id="btn" className="btn btn-primary"> Register</button></Link> */}
            </form>
          
            </Banner>
            </Hero>
            </>

    );

}


export default Login;
