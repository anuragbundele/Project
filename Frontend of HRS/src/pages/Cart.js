import React from "react";
import { useState } from "react";
import Hero from "../components/Hero";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import clienthelper from '../service/helper';
import Navbar from "../components/Navbar";
const Cart=()=>{
    let[id,setid]=useState({id:""});
    let params=useParams();
    var pid=(JSON.stringify(params));
    var sid=JSON.parse(pid);
    var rid=sid.slug;
    let history=useHistory();
    

    const handleChange=(event)=>{
        const{name,value}=event.target;
        setid({...id,[name]:value});

        // console.log(event.target.name)
        
    }

   
    const addtocart=()=>{
        clienthelper.addToCart(rid,id).then((result)=>{
            toast.success("Added to Cart!");
            history.push("/rooms");
        }).catch((error)=>{
            toast.error("Please select room first");
            history.push("/rooms");
        })
    }

    return(
        <>
        <Hero>
        <Banner title={"Cart"}>
            <form method="post">
                <label htmlFor="clientid" className="form-group">Enter Client Id</label>
                    <input style={{"backgroundColor":"white","color":"black","textTransform":"initial"}}  type="number" name="contactno" id="contactno" className="form-control" value={id}
                        onChange={handleChange}
                        placeholder="Enter Client Id." required="true" ></input>
                <button style={{"padding":"10px"}} type="submit" name="btn" id="btn" className="btn btn-primary" onClick={addtocart}>Add</button>
                
            </form>
            
        </Banner>
    </Hero>
   
</>
    );

}

export default Cart;