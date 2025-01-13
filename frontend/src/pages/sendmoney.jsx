import  axios  from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {  jwtDecode } from 'jwt-decode';

export function Sendmoney(){
    const[amount,setamount]=useState(0);
    const location=useLocation();
    const username=location.state.username;

     const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzgwMDJkYmE2NTUwYWQ3MDRiMDA2NWQiLCJpYXQiOjE3MzY0NDI1ODd9._K5x75qiMk0YK4TY1rcbjsHITwPS-zcaSzUX7VS938s"
     const decoded=jwtDecode(token);

     
     const userId=decoded.userId;
     
 


    async function transfer(){
        const response=await axios.post("http://localhost:3000/api/vi/account/transfer",{
            amount,
            "to":location.state.recieverId,
            userId
        })
    }


    
    return(
        <>
        <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
        <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-3xl font-bold text-center">Send Money</h2>
            </div>
        <div>
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-2xl text-white">A</span>
                    </div>
                    <h3 className="text-2xl font-semibold">{location.state.username}</h3>
                </div>
                
        </div>
        <div className="space-y-4">
        <div className="space-y-2">
        <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Amount(in Rs)</div>
        <input type="number" placeholder="Enter amount" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" onChange={(e)=>{
            setamount(e.target.value)
        }}/><br/>
        </div>
        <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white" onClick={transfer}>Initiate Transfer</button>
        </div>
        </div>
        </div>
        </div>
        </>

    )
}