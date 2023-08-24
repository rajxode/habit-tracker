
// Error page { it will redirect you back to home page after 3 second }


// react hooks
import { useEffect } from "react";

// react-route hook
import { useNavigate } from "react-router-dom";


export const Error = () => {
    // to navigate to the homepage
    const navigate=useNavigate();

    // redirect to homepage after 3 second
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/");
        },3000);
    },[])


    return(
        // main page container
        <div className="w-screen h-screen p-2 flex justify-center items-center bg-indigo-100">

            {/* div showing the error message */}
            <div className=" w-[90%] h-[90%] text-lg">

                {/* page heading */}
                <h1 className="text-3xl font-bold text-indigo-600 text-center">Error... Something went wrong !!!</h1>

                {/* message for redirecting back to homepage */}
                <p className="text-center mt-1 font-semibold"> Please Wait, Redirecting back to homepage.</p>

            </div>
            
        </div>
    )
}