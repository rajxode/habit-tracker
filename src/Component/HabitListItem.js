import { useDispatch } from "react-redux";
import { setShowStatus } from "../Redux/Reducer/habitReducer";




const HabitListItem = (props) => {
    const dispatch = useDispatch();
    const {name,completedDays,url} = props.habit;

    const handleClick = () => {
        dispatch(setShowStatus(props.habit));
    }

    return(
        <div className="w-full h-12 bg-[#BEADFA] font-semibold my-1 
                        rounded p-2 flex justify-between items-center cursor-pointer 
                        hover:bg-[#A084E8]"
            onClick={handleClick}>
            <div>
                <p>{name}</p>
                <small>{completedDays}/7 Days</small>
            </div>

            <div className="float-right">
                <img src={url} alt="icon" className="h-8 w-8 "/>    
            </div>
            
        </div>
    )
}

export default HabitListItem;