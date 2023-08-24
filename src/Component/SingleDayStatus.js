
// to render a small card containing a specifice date and status of habit on that particular day


// render the component
const SingleDayStatus = ({day,i,status,toggleStatus}) => {
    /* getting value of the day, index of habit in the habit list, status of habit {done, not done, pending}
        function to change the status of habit from the props */


    // render the card
    return(
        // card container
        <div className="w-fit bg-blue-100 m-1 mt-[2%] p-1 h-20 flex flex-col justify-between rounded shadow-md">
            
            {/* header of card containing the day and date */}
            <div className="p-1 text-center w-full h-2/5 border-b font-semibold border-blue-300">
                {day}
            </div>

            {/* footer of card */}
            {/* containing three buttons of status ( done, not done, pending ) */}
            <div className="w-full text-center h-3/5 flex items-center justify-between">
                
                {/* first button for task done */}
                {/* adding dynamic class to button when button is clicked */}
                <button className={`mx-1 p-1 ${status ? `text-green-600` : `text-slate-400`} text-2xl`}
                        onClick={() => toggleStatus(i,true)}>
                    <i class="fa-solid fa-circle-check"></i>
                </button>
                

                {/* second button for not done */}
                {/* adding dynamic class to button when button is clicked */}
                <button className={`mx-1 p-1 ${status === false ? `text-red-600` : `text-slate-400`} text-2xl`}
                        onClick={() => toggleStatus(i,false)}>
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>    
                

                {/* third button for pending status (by default selected) */}
                {/* change the color if button is clicked or some other button is clicked */}
                <button className={`mx-1 p-1 ${status === null ? `text-blue-600` : `text-slate-400`} text-2xl`}
                        onClick={() => toggleStatus(i,null)}>
                    <i class="fa-solid fa-ellipsis"></i>
                </button>        

            </div>

        </div>
    )
}


// export the component
export default SingleDayStatus;