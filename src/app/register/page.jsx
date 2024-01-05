"use client"
import { useState } from "react"
import Link from "next/link"
import Input from "../components/Input"
import axios from 'axios'
import { useRouter } from "next/navigation" // use it from inside the function for routing

const defaultData = { name:"", username:"" ,password:""}
const Register = function(){
         const[data,setData] = useState(defaultData)
         const router  = useRouter()

         const onValueChange = (e) =>{

            setData({...data,[e.target.name]:e.target.value})

         }

         const onButtonChange = async(e) =>{
            e.preventDefault()

            if(!data.name || !data.username || !data.password){
                alert("Filling all Details are mandatory")
                return;
            }
            
            try{

                 let response =  await axios.post("api/users/register" ,data)
                 setData(defaultData)

                 if (response.status === 200){
                    router.push('/login')

                 }
            }catch(e){
                console.log(e)
            }
         }
    return(
        <>
        <div className="min-h-screen bg-gray-200 flex justify-center items-center">

            <div className="bg-white px-20 pt-8 pb-12  mb-4">
                <h1 className="text-center text-3xl mb-5">Register !</h1>
                <form>
                     <Input label="Name" id="name" type="text" value={data.name} onChange={(e) => onValueChange(e)} />
                     <Input label="Username" id="username" type="text"  value={data.username} onChange={(e) => onValueChange(e)}  />
                     <Input label="Password" id="password" type="password" value={data.password} onChange={(e) => onValueChange(e)}  />
                     <button className="bg-blue-300 w-full hover:bg-blue-400 py-2 px-4 rounded-full" onClick={(e) =>onButtonChange(e)}>Submit</button>
                     <p className="text-center mt-4">Already have an account {""}
                     <Link href='/login' className="text-blue-500 hover:underline">Login</Link>
                      </p>
                </form>
            </div>
        </div>
        </>
    )
}

export default Register