"use client"
 
 

 
const Home = function(){
         

         const onLogut = (e) =>{
            e.preventDefault()
            

            

         }
    return(
        <>
        <div className="min-h-screen bg-gray-200 flex justify-center items-center">

            <div className="bg-white px-20 pt-8 pb-12  mb-4">
                <h1 className="text-center text-3xl mb-5">Welcome to Profile Page</h1>
                <p className="mb-6 text-center justify-center flex">Explore more and enjoy</p>
                <button className="bg-red-500  hover:bg-red-700  text-white py-2 px-4 rounded-full w-full"
                onClick={(e) => onLogut(e)}
                >
                    Logout
                </button>
                
            </div>
        </div>
        </>
    )
}

export default  Home