export function Users(){
    return(
        <div>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input type="text" placeholder="Search Users" className="w-full px-2 py-1 border rounded border-slate-200" />
        </div>
        <User label={"U1"} label2={"User 1"}/>
        <User label={"U2"} label2={"User 1"}/>
        <User label={"U3"} label2={"User 1"}/>
        </div>
     
    )
}

function User({label, label2}){
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
            <button class="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Send Money</button>
            </div>
        </div>
    )
}