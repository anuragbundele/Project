import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { margin } from "@mui/system";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { useEffect, useState } from "react";
import { Timeline } from "@mui/icons-material";
import { toast } from 'react-toastify';
 const Contact=()=>{
   // const currentDate=new Date().toLocaleDateString();

    const options = { month: 'long', day: 'numeric', year: 'numeric' };
const currentDate = new Date().toLocaleDateString(undefined, options);

    // const [startDate, setStartDate] = useState((new Date().toLocaleTimeString()));
    // const handleStartDateChange = (event) => {
    //     setStartDate(event.target.value);
    // }
//time 
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);

    const subData=()=>{
        toast.success("Your Response get Sumbitted Successfully !!!")
    }
    return(
        <>
        <Hero>
            <Banner title="Corperate Contact">
            <h4>"Need help with a booking or any Query ask Us?"</h4>
            
{/* <div className="form-group">
    <form action="https://formsubmit.co/eea6aaa01ffcd36b9611bab4a83f3d02" method="POST">
        <input type="email" name="Email" placeholder="Enter your Email" required></input>
        <input type="text" name="Name" placeholder="Enter your name"></input>
        <button type="submit">Send</button>
    </form>
</div> */}
<form method="post" className="cont-tab" action="https://formsubmit.co/eea6aaa01ffcd36b9611bab4a83f3d02">
<label htmlFor="Name" className="form-group">Enter Name</label><br></br><input style={{"backgroundColor":"white","color":"black","textTransform":"initial","height":"28px","width":"400px","align":"center"}}  type="text" name="Name" id="Name"
 placeholder="Enter Name" className="form-control" required></input><br></br>

 <label htmlFor="Email" className="form-group">Enter Email</label><br></br><input style={{"backgroundColor":"white","color":"black","textTransform":"initial","height":"28px","width":"400px"}}  type="email" name="Email" id="Email"
 placeholder="Enter Your Email" className="form-control" required></input><br></br>
<br></br>
 <input style={{"backgroundColor":"white","color":"black","textTransform":"initial","height":"28px","width":"200px","padding":"0px 50px"}} name="Date" id="Date" value={currentDate}
 ></input>
 
 <input style={{"backgroundColor":"white","color":"black","textTransform":"initial","height":"28px","width":"200px","padding":"0px 50px"}} name="Time" id="Time" value={currentTime}
 ></input><br></br>

 <label htmlFor="Query" className="form-group">Enter Query</label><br></br><input style={{"backgroundColor":"white","color":"black","textTransform":"initial","height":"50px","width":"400px"}}  type="text" name="Query" id="Query"
 placeholder="Write Query Here..." className="form-group" required></input><br></br><br></br>
 <button style={{"padding":"2px","height":"30px"}} type="submit"className="btn btn-primary" onClick={subData}><pre>Ask Query</pre></button><br></br>
 <sub className="form-text" style={{"color":"gold"}}>We'll try to give response within 24hrs</sub>

                </form>
            </Banner>
        </Hero>
        </>
    )
};

export default Contact;