import React,{Component} from "react";
import { FaHiking,FaSolarPanel,FaHotel,FaSpa, FaCocktail } from "react-icons/fa";
import Title from './Title';

export default class Services extends Component{
    state={
        services:[
            {
                icon:<FaHiking/>,
                title:"Hiking Kits",
                info:"Hills are very near from hotel location and hiking tools are also available."
            },
            {
                icon:<FaSolarPanel/>,
                title:"Hot water available 24/7",
                info:"SolarPanel are mounted so Hot water is available 24/7."
            },
            {
                icon:<FaHotel/>,
                title:"Other Branches",
                info:"We provide services at various location."
            },
            {
                icon:<FaSpa/>,
                title:"Unisex Spa service available",
                info:"Attached Spa are also available in delux rooms at reasonable price."
            }
            // {
            //     icon:<FaCocktail/>,
            //     title:"Cocktails are Available",
            //     info:"Cocktails are available in our hotel along with other drinks and soft drinks."
            // }
        ]
    }
    render(){
        return(
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                {
                    this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })
                }

                </div>
            </section>
        );
    }
}