import { Bottom } from "../components/bottombar";
import { HeadingComponent } from "../components/heading";
import { Inputbar } from "../components/inputbar";
import { Subheading } from "../components/sub-heading";

export function Signin(){

    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <HeadingComponent label={"Sign In"}/>
            <Subheading label={"Enter your credentails to access the account"}/>
            <Inputbar label={"First Name"} type={"text"} />
            <Inputbar label={"Email"} type={"text"}/>
            <Inputbar label={"Password"} type={"password"}/>
            <Bottom label1={"Don't have an account? "} label2={"Sign-Up"} to={"/signup"}/>
                </div>
            </div>
        </div>
       
    )
}