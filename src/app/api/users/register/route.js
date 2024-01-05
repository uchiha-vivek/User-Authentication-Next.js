
import  User from '@/models/user'
import bcryptjs from 'bcryptjs'
import Connection from '@/database/config'

Connection()
export const POST = async(NextRequest,Response ) =>{

    try{
        const body = await NextRequest.json()

        const  { name, username , password} =body;

        if(!name || !username || !password){
            return new Response("name.username and password is required", {status:401})
        }

        // validation
        // checking whether the username exist in Database or not
        const user =  await User.findOne({username:username})
        if (user){
            return new Response("Username already exist",{status:400})
        }

        const salt = await bcryptjs.genSalt(12);
        // hashing your password;
        const hashPassword = await bcryptjs.hash(password,salt)

        const newUser = new User({
            name:name,
            username:username,
            password:hashPassword
        })

        await newUser.save()

        return new  Response("user saved successfully",{status:200})


    }catch(e){
        console.log(e)
    }
}