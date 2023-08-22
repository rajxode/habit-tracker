
import { useState } from "react";

const AddHabit = () => {
    const [habitName,setHabitName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(habitName);
    }

    return(
        <div className="w-full sm:w-4/5 h-1/2 bg-[#C5DFF8] rounded shadow-md justify-self-end flex flex-col p-2">
            <h1 className="text-indigo-700 text-lg font-semibold text-center mt-1">
                Add Habit
            </h1>
            <div className="w-4/5 self-center border-t border-indigo-400">
                <form onSubmit={handleSubmit}>
                    <label for="habit-name"
                            className="font-semibold">
                        Habit:
                    </label>
                    <br />
                    <input type="text" placeholder="Enter habit name..." 
                            id="habit-name" value={habitName}
                            className="w-full h-8 rounded my-2" 
                            onChange={(e) => setHabitName(e.target.value)} required />
                    <br />
                    <button type="submit" className="bg-[#7895CB] hover:bg-indigo-500 rounded shadow-md p-1 mt-2 text-white font-medium float-right">
                        ADD HABIT
                    </button>
                </form>
            </div>
            
        </div>
    )
}


export default AddHabit;