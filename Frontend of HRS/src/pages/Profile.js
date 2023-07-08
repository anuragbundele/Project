import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { borderRadius } from "@mui/system";

function Profile() {
    let history = useHistory();
    const hrStyle = {
        color: "blue",
        backgroundColor: "blue",
        height: "3px",
        borderRadius: "2px none none 2px",
        margin: "5px 0",
    };
    const handleLog = (e) => {
        
        history.push("/login");
        localStorage.clear();
        localStorage.clear();
        window.location.reload("/login");
        toast.success("Logged out Successfully",{autoClose:30000});

    }
    const edata = JSON.parse(localStorage.getItem("Data"));
    const name = edata.name;
    const id = edata.id;
    const mb = edata.contactno;
    const email = edata.email;
    const date = new Date();
    const neDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 30, 1).toLocaleDateString();
    return (
        <div>
            <Hero>
                <Banner subtitle="Welcome Sir/Madam">
                    <div class="card" style={{ "background": "darkgrey", "padding": "20px", "borderRadius": "70px 1px ", "width": "300px", "height": "390px", "color": "black","border":"7px solid grey" }}>
                        <AccountCircleIcon style={{ "color": "blue", "marginTop": "-20px", "width": "90px", "height": "80px" }}></AccountCircleIcon>
                        <hr style={hrStyle}></hr>
                        <h5><b><u>ID no:{id}</u></b></h5>
                        <span style={{"textAlign":"left"}}>
                            <h7><b><u>Name:</u></b>{name}</h7><br></br>
                            <h7><b><u>Mb.No:</u></b>{mb}</h7><br></br>
                            <h7><b><u>Email:</u></b>{email}</h7><br></br>
                            <h7><b><u>Expires:</u></b>{neDate}</h7><br></br><br></br>
                            <button style={{"color":"blue","padding":"5px","borderRadius": "10px 1px","border":"none"}}><a href="/Update">Update Profile</a></button>
                        </span>

                        <hr style={hrStyle}></hr>
                        <sub style={{ "color": "blue" }}>(ID is valid only for One Month)</sub><br></br><br></br>

                        <button style={{ "padding": "5px","borderRadius": "10px 1px" }} type="submit" name="btn" id="btn" className="btn btn-primary" onClick={handleLog}>Logout</button>


                    </div>
                </Banner></Hero>
        </div>
    )
}

export default Profile