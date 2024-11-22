import { Bottom } from "../components/bottombar";
import { HeadingComponent } from "../components/heading";
import { Inputbar } from "../components/inputbar";
import { Subheading } from "../components/sub-heading";

export function Signup(){

    return(
       
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <HeadingComponent label={"Sign Up"}/>
        <Subheading label={"Enter your information to create an account"}/>
        <Inputbar label={"First Name"} type={"text"} />
        <Inputbar label={"Last Name"} type={"text"}/>
        <Inputbar label={"Email"} type={"text"}/>
        <Inputbar label={"Password"} type={"password"}/>
        <Bottom label1={"Already have a account? "} label2={"Login"} to={"/signin"}/>
                </div>
            </div>
        </div>
       
    )
}