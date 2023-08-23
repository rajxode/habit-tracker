import { useDispatch } from "react-redux";
import { setSuggestionSelected } from "../Redux/Reducer/habitReducer";


const ListItem = (props) => {
    const dispatch = useDispatch();

    const {habit,url} = props.habit;

    const handleClick = () => {
        dispatch(setSuggestionSelected(props.habit));
    }

    return(
        <div className="w-full h-11 bg-[#BEADFA] font-semibold my-1 
                        rounded p-1 flex justify-between items-center cursor-pointer 
                        hover:bg-[#A084E8]"
            onClick={handleClick}>
            <div>
                {habit}
            </div>

            <div className="float-right">
                <img src={url} alt="icon" className="h-8 w-8 "/>    
            </div>
            
        </div>
    )
}


export default ListItem;