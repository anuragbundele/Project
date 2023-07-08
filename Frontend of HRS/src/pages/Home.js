import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";

import { Link } from "react-router-dom";


export default function Home(){
    return(
        <>
        <Hero>
            <Banner title="Luxurious Rooms" subtitle="Super Delux Rooms Starting At Rs.999">
                <Link to="/rooms" className="btn btn-primary">Our Rooms</Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRoom/>
        
        </>
    )
};

