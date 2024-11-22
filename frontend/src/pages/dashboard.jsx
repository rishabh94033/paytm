import { Appbar } from "../components/appbar";
import { Balance } from "../components/balance";
import { Users } from "../components/users";

export function Dashboard(){

    return(
        <div>
            <Appbar label1={"Payments App"} label2={"User"}/>
            <Balance label={"Your Balance $6900"} />
            <Users    />
        </div>
       

    )
}