export function Inputbar({label, type, onchange}){
    return(
        <div>
            <div className="text-sm font-medium text-left py-2">{label}</div>
            <input onChange={onchange} type={type} placeholder={label}  className="text-sm font-medium text-left py-2" />
        </div>
    )
}