import { useState,useEffect } from "react";
import { useHistory,Link } from "react-router-dom";
import clienthelper from '../service/helper';
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Bookings=()=>{

    let[bookob,setbookob]=useState([{}]);
    let[flag,setflag]=useState(false);
    let history=useHistory();

    useEffect(()=>{
        clienthelper.getBookings().then((response)=>{
            console.log(response.data);
            setbookob(response.data);
        }).catch((err)=>{console.log("Error Occured",err)})
    },[]);

    useEffect(()=>{
        clienthelper.getBookings().then((response)=>{
            // history.push("/list");
            setbookob(response.data);
        }).catch((err)=>{console.log("Error Occured",err)})
    },[flag]);

    // const deleteData=(id)=>{
    //     clienthelper..then((result)=>{
    //             console.log(result.data);
    //     }).catch((err)=>{console.log("Error Occurred in delete",err)});

    //     setflag(true);
    // }
    const renderList=()=>{
        return bookob.map((temp)=>{
            return <tr key={temp.id}>
            <td>{temp.id}</td>
            <td>{temp.name}</td>
            <td>{temp.aadharno}</td>
            <td>{temp.fromdate}</td>
            <td>{temp.todate}</td>
            <td>{temp.newroom}</td>
            </tr>
        });
    }
    return(
        <div>
            <Hero>
            <Banner title="Bookings List">
            <table style={{"border":"3px solid black","padding":"40px","columnSpan":"5px"}}>
                <thead>
                    <tr>
                        <th><h3>ID</h3></th>
                        <th><h3>Name</h3></th>
                        <th><h3>Aadhar No.</h3></th>
                        <th><h3>Check-In</h3></th>
                        <th><h3>Check-Out</h3></th>
                        <th><h3>Room No.</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
            </Banner>
            </Hero>
        </div>
    )
}
export default Bookings;