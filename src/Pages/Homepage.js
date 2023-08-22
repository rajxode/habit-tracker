import AddHabit from "../Component/AddHabit";
import Quote from "../Component/Quote";


const Homepage = () => {
    return(
        <div className="w-full flex h-fill justify-center items-center mt-4">
            <div className="w-4/5 h-fill p-2 bg-slate-300 flex flex-col justify-center items-center">
                
                <Quote />
                <AddHabit />

            </div>
        </div>            
    )
}

export default Homepage;