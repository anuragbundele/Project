import React from "react";
import { Link } from "react-router-dom";
import Room from "./Room";
export default function RoomList({rooms}){
    if(rooms.length===0){
        return(
            <div className="empty-search">
                <h3>Unfortunately no rooms matched with your search</h3>
            </div>
        );
    }

    // return(
    //     <section className="roomslist">
    //         <div className="roomslist-center">
    //         {
    //             rooms.map((item)=>{
    //                 return <Room key={item.id} price={item.price} room={item}></Room>
    //             })
    //         }
    //         <Link to={'/item/${item.id}?price=${item.price}'}></Link>
    //         </div>
    //     </section>
    // );
    // return (
    //     <section className="roomslist">
    //         <div className="roomslist-center">
    //       {rooms.map((item) => (
    //         <div key={item.id}>
    //           <h3>{item.name}</h3>
    //           <p>Price: {item.price}</p>
    //           <Link to={`/item/${item.id}?price=${item.price}`}>
            
    //           </Link>
    //         </div>
    //       ))}
    //     </div>
    //     </section>
    //   );
    return (
        <section className="roomslist">
          <div className="roomslist-center">
            {rooms.map((item) => {
              return <Room key={item.id} price={item.price} room={item}></Room>;
            })}
            {rooms.map((item) => {
              return (
                <Link key={item.id} to={`/item/${item.id}?price=${item.price}`}>
                </Link>
              );
            })}
          </div>
        </section>
      );
      
    }
   