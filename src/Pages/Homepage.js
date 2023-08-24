
// Homepage

// importing react hooks
import { useEffect, useState } from "react";

// redux hooks
import { useDispatch, useSelector } from "react-redux";

// actions from habitReducer
import { habitSelector, quoteFetchThunk, setSuggestionSelected } from "../Redux/Reducer/habitReducer";

// different Components used in homepage

//for adding a new habit to list 
import AddHabit from "../Component/AddHabit";
// for showing a new quote on each render 
import Quote from "../Component/Quote";
// for showing list of suggested habits
import Suggestions from "../Component/Suggestions";



// render the homepage 
const Homepage = () => {

    // for calling redux actions
    const dispatch = useDispatch();

    // state variable from habitReducer , to show image on homepage, to know if user clicked on a habit in suggestion list
    const { displayImageUrl,suggestionSelected } = useSelector(habitSelector);

    // whether to show / hide the input section to "Add Habit"
    const [showAddHabit,setShowAddHabit] = useState(false);

    // fetch a quote from api on first render of the page
    useEffect(() => {
        dispatch(quoteFetchThunk());
    },[]);


    // if user click on a suggestion in suggestion list
    // show the "Add Habit" form
    useEffect(() => {
        if(suggestionSelected){
            setShowAddHabit(true);
        }
    },[suggestionSelected]);


    // to show or hide the "Add Habit"
    const toggleAddHabit = (e) => {
        e.preventDefault();
        // toggle the value
        setShowAddHabit((prev) => !prev);

        // if user hide the "Add Habit" form, then reset the value of suggestion selected to null (if there was some value in it)
        if(!showAddHabit){
            // calling the action
            dispatch(setSuggestionSelected(null));
        }
    }


    // render the page
    return(
        // main container of page
        <div className="w-full flex h-full justify-center my-2 overflow-auto bg-fixed">

        {/* container containing all the differnet section on the home page */}
            <div className="w-[90%] h-fill flex">

                {/* container showing quote , "Add Habit" form, and "image" */}
                <div className="w-full h-fit md:w-2/3 flex flex-col items-center justify-between
                                 bg-[#f4faff] md:h-full p-2 mr-1 rounded shadow-md">
                    
                    <div className="w-full h-full flex flex-col items-center">
                        
                        {/* rendering quote on screen */}
                        <Quote />

                        
                        <div className="w-full lg:w-4/5 mb-1">
                            {/* button to show / hide the "Add Habit" form on screen */}
                            <button className="bg-[#72a3e9] hover:bg-[#2e4b75] text-md 
                                                p-[2px] px-[4px] float-right
                                                rounded shadow-sm text-white"
                                    onClick={toggleAddHabit}>

                                {/* value of button on different condition */}
                                {!showAddHabit? "Add Habbit" : "Cancel"}
                            </button>
                        </div>

                    </div>
                    
                    {
                        // if user clicked on the 'Add Habit' button
                        showAddHabit?
                            <div className="w-full h-full flex justify-center">
                                {/* show the "Add Habit" component */}
                                <AddHabit />
                            </div>
                        :
                            // else show a image on screen { new image on each render }
                            <img src={displayImageUrl} alt="image" 
                                className="hidden md:block w-full lg:w-4/5 md:h-full lg:h-2/3 mb-2 opacity-90" />
                    }
                    
                    {/* incase of screen width smaller than 'md' */}
                    {/* show the suggestion list of habits in the same section*/}
                    <div className="md:hidden w-full h-fill rounded bg-[#f4faff]
                                     shadow-md ml-1 bg-fixed overflow-scroll">
                        {/* render the suggestion list */}
                        <Suggestions />
                    </div>
                    
                </div>


                {/* if the screen width is "md and above" */}
                {/* show suggestion list in different section */}
                <div className="hidden md:block w-1/3 h-full rounded bg-[#f4faff]
                                 shadow-md ml-1 bg-fixed overflow-scroll">
                    {/* render the suggestion list */}
                    <Suggestions />
                </div>

            </div>
        </div>            
    )
}

// exporting the homepage for using it outside
export default Homepage;