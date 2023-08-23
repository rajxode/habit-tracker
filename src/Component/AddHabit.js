
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHabit, habitSelector, setSuggestionSelected } from "../Redux/Reducer/habitReducer";

// for toast notifications
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddHabit = () => {
    const dispatch = useDispatch();

    const [habitName,setHabitName] = useState('');
    const { suggestionSelected } = useSelector(habitSelector);

    useEffect(() => {
        if(suggestionSelected){
            setHabitName(suggestionSelected.habit);
        }
    },[suggestionSelected]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDate =  new Date().toString();
        
        const data = {
            id:'',
            name:habitName,
            completedDays:0,
            createdOn:`${newDate.slice(4,15)}`,
            url: suggestionSelected ? `${suggestionSelected.url}` : 'https://freeiconshop.com/wp-content/uploads/edd/task-done-flat.png',
        };

        dispatch(addHabit(data));
        dispatch(setSuggestionSelected(null));
        setHabitName('');
        toast.success('New Habit is Added !!');
    }

    return(
        <div className="w-full sm:w-4/5 h-1/2 bg-[#C5DFF8] rounded shadow-md justify-self-end flex flex-col p-2">
            <h1 className="text-indigo-700 text-lg font-semibold text-center mt-1">
                Add Habit
            </h1>
            <div className="w-4/5 self-center border-t border-indigo-400">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="habit-name"
                            className="font-semibold">
                        Habit:
                    </label>
                    <br />
                    <input type="text" placeholder="Enter habit name..." 
                            id="habit-name" value={habitName}
                            className="w-full h-8 rounded my-2 px-1 font-semibold text-indigo-800" 
                            onChange={(e) => setHabitName(e.target.value)} required />
                    <br />
                    <button type="submit" className="bg-[#9b80fc] 
                                                hover:bg-indigo-500 rounded 
                                                shadow-md p-1 mt-2 text-white 
                                                font-medium float-right">
                        ADD HABIT
                    </button>
                </form>
            </div>
            
        </div>
    )
}


export default AddHabit;