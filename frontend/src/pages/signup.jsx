import { useState } from "react";
import { Bottom } from "../components/bottombar";
import { ButtonComponent } from "../components/buttoncomponent";
import { HeadingComponent } from "../components/heading";
import { Inputbar } from "../components/inputbar";
import { Subheading } from "../components/sub-heading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signup(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    return(
       
            
        <div className="bg-slate-300 h-screen flex justify-center">
            
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <HeadingComponent label={"Sign Up"}/>
        <Subheading label={"Enter your information to create an account"}/>
        <Inputbar label={"First Name"} type={"text"} onchange={e=>{
            setFirstName(e.target.value)
        }} />
        <Inputbar label={"Last Name"} type={"text"} onchange={e=>{
            setLastName(e.target.value)
        }}/>
        <Inputbar label={"Email"} type={"text"} onchange={e=>{
            setUsername(e.target.value)
        }}/>
        <Inputbar label={"Password"} type={"password"} onchange={e=>{
            setPassword(e.target.value)
        }}/>
        <ButtonComponent label={"Signup"} onClick={async ()=>{
            try{
                const res=await axios.post("http://localhost:3000/api/vi/user/signup",
                    {
                        "firstName":firstName,
                        "lastname":lastName,
                        "password":password,
                        "username":username
                    }
                )
                const token= res.data.token
                localStorage.setItem("PaytmLiteToken",token)
                navigate("/dashboard")
            }catch(err){
                console.log("error while logging");
            }
            }}/>
        <Bottom label1={"Already have a account? "} label2={"Login"} to={"/signin"}/>
                </div>
            </div>
        </div>
       
    )
}