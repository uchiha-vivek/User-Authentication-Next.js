"use client"
import { useState } from "react"
import Link from "next/link"
import Input from "../components/Input"

const  defaultData= {username:"" ,password:""}
const Login = function(){
         const[data,setData] = useState(defaultData)

         const onValueChange = () =>{

            setData({...data,[e.target.name]:e.target.value})

         }

         const onLogin = (e) =>{
            e.preventDefault()

            if(!data.username || !data.password){
                alert("Filling all Details are mandatory")
                return;
            }

         }
    return(
        <>
        <div className="min-h-screen bg-gray-200 flex justify-center items-center">

            <div className="bg-white px-20 pt-8 pb-12  mb-4">
                <h1 className="text-center text-3xl mb-5">Register !</h1>
                <form>
                 
                     <Input label="Username" id="username" type="text"  value={data.username} onChange={(e) => onValueChange(e)}  />
                     <Input label="Password" id="password" type="password" value={data.password} onChange={(e) => onValueChange(e)}  />
                     <button className="bg-blue-300 w-full hover:bg-blue-400 py-2 px-4 rounded-full" onClick={(e) =>onLogin(e)}> Login</button>
                     <p className="text-center mt-4">Not having an account {""}
                     <Link href='/register' className="text-blue-500 hover:underline">Register</Link>
                      </p>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login