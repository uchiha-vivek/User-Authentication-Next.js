


const Input = function({label,text,id,...props}){
    return(

        <>
        <div className="mb-5">
            <label htmlFor={id} className="block text-gray-500 mb-3  font-semibold" >{label}</label>
            <input type={text} id={id} name={id} {...props} autoComplete="off"  className="w-full  p-2  border border-gray-400 rounded-md focus:outline-none focus:border-blue-400 "/>
        </div>
        
        </>
    )
}

export default Input