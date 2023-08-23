import { useEffect, useState } from "react";
import HabitList from "../Component/HabitList";
import HabitStatus from "../Component/HabitStatus";

const DetailsPage = () => {

    const [date,setDate] = useState('');

    useEffect(() => {
        const newDate =  new Date().toString();
        setDate(newDate.slice(0,15));
    },[]);

    return(
        <div className="w-full h-full bg-fixed overflow-auto flex justify-center items-center">
            <div className="w-[90%] h-[92%] rounded shadow-md flex flex-col justify-between p-2 items-center">
                
                <div className="w-full h-12 rounded shadow-md bg-indigo-300 p-1 px-2 flex justify-between items-center text-xl text-white font-semibold">
                    <div>
                        Hey Champ,
                    </div>

                    <div>
                        {`${date.slice(0,3)} , ${date.slice(3 )}`}
                    </div>
                </div>

                <div className="w-full h-[90%] rounded shadow-sm flex bg-indigo-50 p-2">
                    <HabitList />

                    <HabitStatus />         
                </div>

            </div>
        </div>
    )
}

export default DetailsPage;