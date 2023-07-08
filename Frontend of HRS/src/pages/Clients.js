import { useState,useEffect } from "react";
import { useHistory,Link } from "react-router-dom";
import clienthelper from '../service/helper';
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Clients=()=>{

    let[facob,setfacob]=useState([]);
    let[flag,setflag]=useState(false);
    let history=useHistory();

    useEffect(()=>{
        clienthelper.getClients().then((response)=>{
            setfacob(response.data);
        }).catch((err)=>{console.log("Error Occured",err)})
    },[]);

    useEffect(()=>{
        clienthelper.getClients().then((response)=>{
            // history.push("/list");
            setfacob(response.data);
        }).catch((err)=>{console.log("Error Occured",err)})
    },[flag]);

    // const deleteData=(id)=>{
    //     clienthelper..then((result)=>{
    //             console.log(result.data);
    //     }).catch((err)=>{console.log("Error Occurred in delete",err)});

    //     setflag(true);
    // }
    const renderList=()=>{
        return facob.map((emp)=>{
            return <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.contactno}</td>
            {/* <td>
                <button type="submit" name="btn" id="btn" className="btn btn-danger" onClick={()=>{deleteData(emp.id)}}>Delete</button>
            </td> */}
            <td>
                {/* <Link to={{pathname:`/edit/${emp.id}`,state:{faculty:emp}}}> */}
                    <button type="submit" name="btn1" className="btn btn-primary" id="btn1">Edit</button>
                {/* </Link> */}
            </td>
            <td>
                {/* <Link to={{pathname:`/view/${emp.id}`,state:{faculty:emp}}}> */}
                    <button type="submit" name="btn2" className="btn btn-primary" id="btn2">View</button>
                {/* </Link> */}
            </td>
            </tr>
        });
    }
    return(
        <div>
            <Hero>
            <Banner title="Clients List">
            <table style={{"border":"3px solid black","padding":"40px","columnSpan":"5px"}}>
                <thead>
                    <tr>
                        <th><h3>ID</h3></th>
                        <th><h3>Name</h3></th>
                        <th><h3>Email</h3></th>
                        <th><h3>Contact Number</h3></th>
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
export default Clients;