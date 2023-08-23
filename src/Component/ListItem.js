import { useDispatch } from "react-redux";
import { addHabit, setSuggestionSelected } from "../Redux/Reducer/habitReducer";


const ListItem = (props) => {
    const dispatch = useDispatch();

    const {habit} = props.habit;

    const handleClick = () => {
        dispatch(setSuggestionSelected(props.habit));
    }

    return(
        <div className="w-full h-11 bg-[#BEADFA] text-white my-1 
                        rounded p-1 flex items-center cursor-pointer 
                        hover:bg-[#A084E8]"
            onClick={handleClick}>
            {habit}
        </div>
    )
}


export default ListItem;