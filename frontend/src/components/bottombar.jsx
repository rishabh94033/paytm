import { Link } from "react-router-dom";

export function Bottom({label1, label2, to}){
    return(
        <div className="py-2 text-sm flex justify-center">
            <div>{label1}</div>
            <Link className="pointer underline pl-1 cursor-pointer" to={to}>{label2}</Link>
        </div>
    )
}