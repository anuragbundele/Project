import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link,useHistory, useLocation } from "react-router-dom";
import clienthelper from '../service/helper';
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import Blink from 'react-blink-text';
import { RoomContext } from "../Context";



const Fillup=(props)=>{
    let[starr,setstarr]=useState({cid:"",name:"",address:"",contactno:"",aadharno:"",fromdate:"",todate:""});
    let history=useHistory();
    let params=useParams();
    
   
    var pid=(JSON.stringify(params));
    var sid=JSON.parse(pid);
    var rid=sid.slug;
    var price=localStorage.getItem("price");
    var price1=price-price*0.2;
    
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setstarr({...starr,[name]:value});

    }
    // let newarr=useState({clients_id:starr.clients_id,name:starr.name,address:starr.address,contactno:starr.contactno,aadharno:starr.aadharno});

    const bookaroom=()=>{
        
        console.log(starr);
        clienthelper.roombooking(rid,starr).then((res)=>{
            console.log(res.data);
            toast.success("Room Booked Successfully");
             history.push("/home");
        }).catch((err)=>{
            toast.error("Sorry try again!!!");
         
            console.log(err);
        })
    }
 const [selectedDate,setselectedDate]=useState(null);
 const currentDate=new Date();

 //for date calculation

 const [startDate, setStartDate] = useState();
 const [endDate, setEndDate] = useState();
 const [difference, setDifference] = useState(0);

 const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    setDifference(calculateDifference(event.target.value, endDate));
    setstarr({...starr,fromdate:event.target.value});
  };
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    setDifference(calculateDifference(startDate,event.target.value))
    setstarr({...starr,todate:event.target.value});
  };

  const calculateDifference = (start, end) => {
    const differenceInMilliseconds = Date.parse(end) - Date.parse(start);
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return differenceInDays;
  };
  const location=useLocation();
    // const price=new URLSearchParams(location.search).get('price') || 0;

    
    return(
        <>
            <Hero>
                <Banner title="Details">
                    <form method="post">
                    <label htmlFor="cid" className="form-group">Enter Id</label>
                            <input style={{"backgroundColor":"white","color":"black","textTransform":"initial","height":"28px"}}  type="text" name="cid" id="cid" className="form-control" value={starr.cid}
                                onChange={handleChange}
                                    placeholder="Enter Id No." class="resizedTextbox" required></input>
                                        <br></br>
                    <label htmlFor="name" className="form-group">Enter Name</label>
                            <input style={{"backgroundColor":"white","color":"black","textTransform":"initial","height":"28px"}} type="text" name="name" id="name" className="form-control" value={starr.name}
                                onChange={handleChange}
                                    placeholder="Enter Name" class="resizedTextbox" required></input>    
                                        <br></br>
                        <label htmlFor="address" className="form-group">Enter Address</label>
                            <input style={{"backgroundColor":"white","color":"black","textTransform":"initial","height":"28px"}} type="text" name="address" id="address" className="form-control" value={starr.email}
                                onChange={handleChange}
                                    placeholder="Enter Address" class="resizedTextbox" required></input>
                                        <br></br>
                   
                        <label htmlFor="contactno" className="form-group">Enter Contact No.</label>
                            <input style={{"backgroundColor":"white","color":"black","textTransform":"initial","height":"28px"}}  type="number" name="contactno" id="contactno" className="form-control" value={starr.contactno}
                                onChange={handleChange}
                                    placeholder="Enter Contact No." class="resizedTextbox" required></input>
                                        <br></br>
                        <label htmlFor="aadharno" className="form-group">Enter Aadhar</label>
                            <input style={{"backgroundColor":"white","color":"black","textTransform":"initial","height":"28px"}}  type="number" name="aadharno" id="aadharno" className="form-control" value={starr.aadharno}
                                onChange={handleChange}
                                    placeholder="Enter Aadhar No." class="resizedTextbox" required></input>
                                        <br></br>
                        <label htmlFor="fromdate" className="form-group">From Date</label>
                            {/* <input style={{"backgroundColor":"white","color":"black","textTransform":"initial"}} min={currentDate}  type="date" name="fromdate" id="fromdate" className="form-control" value={starr.fromdate} */}
         
         <input style={{"backgroundColor":"white","color":"black","textTransform":"initial","height":"28px"}} min={currentDate.toISOString().split("T")[0]}  type="date" name="fromdate" id="fromdate" className="form-control" value={starr.fromdate}
                                onChange={handleStartDateChange} 
                                    placeholder="From Date" class="resizedTextbox" required></input>
                                        <br></br>
                        <label htmlFor="todate" className="form-group">To Date</label>
                            {/* <input style={{"backgroundColor":"white","color":"black","textTransform":"initial"}}  type="date" name="todate" id="todate" className="form-control" value={starr.todate} */}
                            <input style={{"backgroundColor":"white","color":"black","textTransform":"initial","height":"28px"}} min={currentDate.toISOString().split("T")[0]}  type="date" name="todate" id="todate" className="form-control" value={starr.todate}
                                onChange={handleEndDateChange}
                                    placeholder="To Date" class="resizedTextbox" required></input>
                                        <br></br>

                                        <label htmlFor="calculate" className="form-group">Total Days</label>
                            {/* <input style={{"backgroundColor":"white","color":"black","textTransform":"initial"}} className="form-control"class="resizedTextbox" readOnly 
                                    ></input> */}
                                    {/* <p className="diffdate"> {difference>0?difference:<Blink color='red' text="Please Enter Valid To-Date" fontSize='30'></Blink>}</p> */}
                                    <p className="diffdate">{difference>=0?difference:<Blink color='#c9932f'fontSize='50'text='"Enter Valid Date"'></Blink>}</p><sub>(₹{price1} per night)</sub>
                                    <p>Total Cost:₹{difference>=0?(price1*difference).toLocaleString():0}</p>
                                   
                                    <br></br>
                                    
                                   
                        <button style={{"padding":"10px"}} type="button" name="btn" id="btn" className="btn btn-primary" onClick={bookaroom}>Book</button>
                        
                    </form>
                </Banner>
            </Hero>
        </>
    );
}

export default Fillup;












