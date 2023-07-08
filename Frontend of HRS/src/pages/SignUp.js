import {useState} from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import clienthelper from '../service/helper';
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
import Login from "./Login";


const Signup=()=>{
    let history=useHistory();
    let[ctarr,setctarr]=useState({
        name:"",
        email:"",
        password:"",
        contactno:""});
    const[data,setData]=useState([]);

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setctarr({...ctarr,[name]:value});
      
       
    }

    const handleClick=(e)=>{
        e.preventDefault();
    
        const {name,email,password,contactno}=ctarr;
        

        if(name===""){
            toast.error("Enter name details")
        }else if(email===" ")
        {
            toast.error("Enter valid email details")
        }else if(!email.includes('@'))
        {
            toast.error("Email should contain '@' type data")
        }else if(password===" ")
        {
            toast.error("Enter password details")
        }else if(contactno===" ")
        {
            toast.error("Enter contactNo details")
        }else if(password.length<5)
        {
            toast.error("length of password must be greater than 5 char")
        }else{
            clienthelper.addClient(ctarr).then((result)=>{
               
        //key--anything and value
        //data value intial null then ctarr value stored in it

              
        //         localStorage.setItem("useryoutube",JSON.stringify([...data,ctarr]));
        //  localStorage.setItem("Name",JSON.stringify(name))      
        // localStorage.setItem("Email",JSON.stringify(email))
                
                toast.success("User Registered Successfully!");
                history.push("/login");
               }).catch((error)=>{console.log("couldn't add")});
        }
      

    }
    
    return(
        <>
        
            <Hero>
                <Banner title={"Register"}>
                    <form method="post">
                        <label htmlFor="name" className="form-group">Enter Name</label>
                            <input style={{"backgroundColor":"white","color":"black","textTransform":"initial"}} type="text" name="name" id="name" className="form-control" value={ctarr.name} required
                                onChange={handleChange}
                                placeholder="Enter Name"  autoFocus ></input>    
                            <br></br>
                        <label htmlFor="email" className="form-group">Enter Email</label>
                            <input style={{"backgroundColor":"white","color":"black","textTransform":"initial"}} type="email" name="email" id="email" className="form-control" value={ctarr.email}
                                onChange={handleChange}
                                placeholder="Enter Email" required="true" ></input>
                   <br></br>
                   
                        <label htmlFor="password" className="form-group">Enter Password</label>
                            <input style={{"backgroundColor":"white","color":"black","textTransform":"initial"}}  type="password" name="password" id="password" className="form-control" value={ctarr.password}
                                onChange={handleChange}
                                placeholder="Enter Passowrd" required="true" ></input>
<br></br>
                        <label htmlFor="contactno" className="form-group">Enter Contact no</label>
                            <input style={{"backgroundColor":"white","color":"black","textTransform":"initial"}}  type="number" name="contactno" id="contactno" className="form-control" value={ctarr.contactno}
                                onChange={handleChange}
                                placeholder="Enter Contact No." required="true" ></input>
<br></br><br></br>
                        <Link to="/login"><button style={{"padding":"10px"}} type="submit" name="btn" id="btn" className="btn btn-primary" onClick={handleClick}>Register</button>
                        </Link>
                    </form>
                    <sub>Already Have an Account <Link to="/login" style={{"color":"gold"}}><b>Login</b></Link></sub>
                </Banner>
            </Hero>
           
        </>
    );
}

export default Signup;