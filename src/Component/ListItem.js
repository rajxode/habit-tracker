
// to render a single list item of suggestion habit list on home page

// redux  hook
import { useDispatch } from "react-redux";

// action to store data of selected habit from the suggestion list
import { setSuggestionSelected } from "../Redux/Reducer/habitReducer";


// component to render the single item
const ListItem = (props) => {
    // for calling the action
    const dispatch = useDispatch();

    // getting habit name and icon url from the props
    const {habit,url} = props.habit;


    // if user click on any list item store the habit data inside the state variable of habitReducer
    const handleClick = () => {
        dispatch(setSuggestionSelected(props.habit));
    }


    // render the list item
    return(
        // container
        <div className="w-full h-11 bg-[#BEADFA] font-semibold my-1 
                        rounded p-1 flex justify-between items-center cursor-pointer 
                        hover:bg-[#A084E8]"
            onClick={handleClick}>
            
            {/* showing name of habit */}
            <div>
                {habit}
            </div>

            {/* showing habit icon in the right side of list item */}
            <div className="float-right">
                <img src={url} alt="icon" className="h-8 w-8 "/>    
            </div>
            
        </div>
    )
}


// export the component
export default ListItem;