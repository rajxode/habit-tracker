
// page to show stats for all the different habits selected by a user

// react hooks
import { useEffect, useState } from "react";

// required Components

// to show list of all the habits selected by a user
import HabitList from "../Component/HabitList";
// to status of a habit 
import HabitStatus from "../Component/HabitStatus";


// render the Details page
const DetailsPage = () => {

    // to show current day, and date on page
    const [date,setDate] = useState('');


    // get the curretn date on first render of the page
    useEffect(() => {
        // get the date by function
        const newDate =  new Date().toString();
        // store the current day and date in variable
        setDate(newDate.slice(0,15));
    },[]);


    // render the page
    return(

        // main container of page
        <div className="w-full h-full bg-fixed overflow-auto flex justify-center items-center">

            {/* container containing all the different section and component */}
            <div className="w-[90%] h-[92%] rounded shadow-md flex flex-col justify-between 
                            p-2 items-center">
                
                {/* to show a header on page */}
                <div className="w-full h-12 rounded shadow-md bg-indigo-300 p-1 px-2 
                                flex justify-between items-center text-xl text-white font-semibold">
                                    
                    <div>
                        {/* greetings */}
                        Hey Champ,
                    </div>

                    <div>
                        {/* show day, and date */}
                        {`${date.slice(0,3)} , ${date.slice(3 )}`}
                    </div>
                </div>

                {/* render the different section of page */}
                <div className="w-full h-[90%] rounded shadow-sm flex bg-indigo-50 p-2 bg-fixed">
                    
                    {/* render the list of all the habits selected by a user */}
                    <HabitList />

                    {/* to show status of a habit */}
                    <HabitStatus />         
                </div>

            </div>

        </div>
    )
}


// export the component to use it outside
export default DetailsPage;