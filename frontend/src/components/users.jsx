import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export function Users(){
    const [users,setusers]=useState([]);
    const[filter,setfilter]=useState("");
    useEffect(()=>{
      
        async function usersfetch() {
            const data= await axios.get(`http://localhost:3000/api/vi/user/bulk?filter=${filter}`,{headers:{
                //  "authorization":`Bearer ${localStorage.getItem("token")}`
                "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzgwMDJkYmE2NTUwYWQ3MDRiMDA2NWQiLCJpYXQiOjE3MzY0NDI1ODd9._K5x75qiMk0YK4TY1rcbjsHITwPS-zcaSzUX7VS938s"
             }})
             setusers(data.data.user)
            
             
         }
         usersfetch()
    },[filter])
    

    
    return(
        <div>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input type="text" placeholder="Search Users" className="w-full px-2 py-1 border rounded border-slate-200" onChange={(e)=>{
                setfilter(e.target.value)
            }}/>
        </div>

        {users.map((user)=>{
           return <User label={user.firstName.substring(0,1)} label2={user.firstName} recieverId={user._id}/>
        })}
        </div>
     
    )
}

function User({label, label2,recieverId}){
    
    
    return(
        <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">

            <div className="flex flex-col justify-center h-full text-xl">{label}</div>
            </div>
            <div className="flex flex-col justify-center h-ful">

            <div>{label2}</div>
            </div>
</div>
            <div className="flex flex-col justify-center h-ful" > 
            <Link to={"/sendmoney"} state={{username:label2,recieverId:recieverId}}><button className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Send Money</button></Link>
            </div>
        </div>  
    )
}