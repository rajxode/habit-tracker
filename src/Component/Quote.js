import { useSelector } from "react-redux";
import { habitSelector } from "../Redux/Reducer/habitReducer";


const Quote = () => {

    const {quote} = useSelector(habitSelector);

    return(
        <div className="w-4/5 h-[100px] mt-4 mb-2 shadow-md rounded
                        bg-indigo-400 text-white p-1">
            {quote.text}
        </div>
    )
}


export default Quote;