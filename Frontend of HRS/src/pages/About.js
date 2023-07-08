import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import log from "../images/rmservice.png";
export default function About(){
    return(
        <>
        <Hero>
            <Banner title="About Us">
            <h3>Our Services</h3>
            <img src={log} width="120px"></img><br></br>
            <br></br>
                <Link to="/rooms" className="btn-primary">Our Rooms</Link>
            </Banner>
        </Hero>
        </>
    )
};

