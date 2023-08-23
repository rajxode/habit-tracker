

const SingleDayStatus = ({day}) => {
    return(
        <div className="w-fit bg-blue-200 m-1 mt-[2%] p-1 h-20 flex flex-col justify-between rounded shadow-md">
            <div className="p-1 text-center w-full h-2/5 border-b font-semibold">
                {day}
            </div>
            <div className="w-full text-center h-3/5 flex items-center justify-between">
                <button className="mx-1 p-1 text-green-700 text-2xl ">
                    <i class="fa-solid fa-circle-check"></i>
                </button>
                
                <button className="mx-1 p-1 text-red-700 text-2xl">
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>    
                
                <button className="mx-1 p-1 text-yellow-700 text-2xl">
                    <i class="fa-solid fa-ellipsis"></i>
                </button>        
            </div>
        </div>
    )
}

export default SingleDayStatus;