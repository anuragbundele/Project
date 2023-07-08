import React,{Component} from 'react';
import defaultBcg from "../images/rooms-2.jpg";
import { useState } from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link, Route, useHistory } from 'react-router-dom';
import { RoomContext } from '../Context';
import StyledHero from '../components/StyledHero';
import clienthelper from '../service/helper';
import { toast } from 'react-toastify';
import Rooms from '../pages/Rooms';
import Fillup from './Fillup';
// import { useState } from 'react';
import history from 'react-router-dom';

export default class SingleRoom extends Component{
    
    // let[price,setPrice]=useState();
    constructor(props){
        super(props)
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType=RoomContext;

    

    render(){
        const {getRoom}=this.context;
        const room=getRoom(this.state.slug);
        localStorage.setItem("price",room.price);
        // const sid=localStorage.setItem("id",room.id);
        console.log(room.id);
        const sid=room.id;
        console.log(sid);
        const validateroom=()=>{
            clienthelper.getroombyId(sid).then((result)=>{
                console.log(result.data);
                // setdata(result.data);
                var newstatus=result.data.status;
                console.log(newstatus);
                if(newstatus==="VACANT")
                {
                    const {history}=this.props;
                    const url=`/fillup/${room.id}`;
                    history.push(url);
                    // history.push('/fillup/${slug}');
                    <Route path='/fillup/${slug}' component={Fillup}></Route>
                    toast.success("Room is Vacant");
                }
                else{
                    toast.error("Room Already Booked");
                }
            }).catch((error)=>{
                toast.error("Error Occurred!!");
                // <Route path="/rooms" component={Rooms}></Route>
                // window.location.reload("/rooms");
            });
        }
        
        if(!room)
        {
            return(
            <div className="error">
                <h3>No such rooms are available....</h3>
                <Link to="/rooms" className="btn btn-primary">
                    Home
                </Link>
            </div>
            );
        }

        const {name,description,capacity,size,price,extras,breakfast,pets,images}=room;

        const [mainImg,...defaultImg]=images;

        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        Back To Rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                   {defaultImg.map((item,index)=>{return <img key={index} src={item} alt={name}></img>})}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3><u>Details</u></h3>
                        <p>{description}</p>
                    </article>
                    <article className="info" style={{"marginLeft":"120px"}}>
                        <h3><u>Info</u></h3>
                        <h6>price: <strike>₹{price}</strike><sub style={{"color":"red"}}>(20% off)</sub></h6>
                        <h6>Deal of the day:<span>₹{price-price*0.02}</span></h6>
                        <h6>size: {size} SQFT</h6>
                        <h6>max capacity:{
                            capacity > 1? `${capacity}people`:`${capacity} people`
                        }</h6>
                        <h6>{pets?"pets allowed":"pets are not allowed"}</h6>
                        <h6>{breakfast && "free breaksfast included"}</h6>

                    </article>
                </div>
            </section>
            <section>
            {/* <Link> */}
            <button type="button" className="btn btn-primary" style={{"fontSize":"20px","marginLeft":"600px","alignContent":"center"}} onClick={validateroom}>Book Now</button>
            {/* </Link> */}
            {/* <Link to={`/fillup/${room.price}`}></Link> */}
            </section>
            <br></br>
            <br></br>
            <section className="room-extras">
                <h4><u>Extras</u></h4>
                <ul className="extras">
                    {extras.map((item,index)=>{
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            </>
        );
    }
}
