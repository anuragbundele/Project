// import axios from "axios";

// export const baseurl="http://localhost:8080";

// export const myAxios=axios.create({
//     baseURL:baseurl
// })

import axios from "axios";
const url="http://localhost:8080/";

class clienthelper{

    getClients(){
        return axios.get(url+"client");
    }

    addClient(cl)
    {
        console.log(cl);
        return axios.post(url+"client/signup",cl);
    }

    validateClient(valid)
    {
        return axios.post(url+"auth/signin",valid);
    }

    getroombyId(roomsid)
    {
        console.log(roomsid);
        return axios.get(url+`room/${roomsid}`);
    }

    roombooking(roomId,rbook)
    {
        return axios.post(url+`fillup/${roomId}`,rbook);
    }
    getByEMail(gm)
    {
        console.log(gm);
        return axios.get(url+`auth/email/${gm}`);
        
    }

    addToCart(roomid,clientid)
    {
        return axios.post(url+`room/${roomid}`,clientid);
    }

    getBookings(){
        return axios.get(url+"fillup");
    }
}

export default new clienthelper();