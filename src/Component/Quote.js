
// to show a quote on the homepage


// redux hook to access the reducer state
import { useSelector } from "react-redux";

// habitReducer's state
import { habitSelector } from "../Redux/Reducer/habitReducer";


// render the quote component
const Quote = () => {

    // get the quote from the reducer state variable
    const {quote} = useSelector(habitSelector);

    // render the section
    return(
        // container
        <div className="w-full lg:w-4/5 h-fit mt-4 mb-2 shadow-md rounded
                        bg-indigo-400 text-white p-2">
            
            {/* heading on left side of section */}
            <h1 className="text-sm">
                Quote of the day:
            </h1>

            {/* quote in the center of screen */}
            <div className="w-full text-center text-lg font-semibold">
                {quote.text}
            </div>

            {/* author name at the right side of section */}
            <h1 className="float-right font-semibold text-black">
                by: {quote.author}
            </h1>                
        
        </div>
    )
}


// export the component
export default Quote;