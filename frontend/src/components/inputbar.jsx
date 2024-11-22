export function Inputbar({label, type}){
    return(
        <div>
            <div className="text-sm font-medium text-left py-2">{label}</div>
            <input type={type} placeholder={label}  className="text-sm font-medium text-left py-2" />
        </div>
    )
}