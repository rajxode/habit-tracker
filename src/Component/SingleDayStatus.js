


const SingleDayStatus = ({day,i,status,toggleStatus}) => {

    return(
        <div className="w-fit bg-blue-100 m-1 mt-[2%] p-1 h-20 flex flex-col justify-between rounded shadow-md">
            <div className="p-1 text-center w-full h-2/5 border-b font-semibold border-blue-300">
                {day}
            </div>
            <div className="w-full text-center h-3/5 flex items-center justify-between">
                <button className={`mx-1 p-1 ${status ? `text-green-600` : `text-slate-400`} text-2xl`}
                        
                        onClick={() => toggleStatus(i,true)}>
                    <i class="fa-solid fa-circle-check"></i>
                </button>
                
                <button className={`mx-1 p-1 ${status === false ? `text-red-600` : `text-slate-400`} text-2xl`}
                        
                        onClick={() => toggleStatus(i,false)}>
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>    
                
                <button className={`mx-1 p-1 ${status === null ? `text-blue-600` : `text-slate-400`} text-2xl`}
                        
                        onClick={() => toggleStatus(i,null)}>
                    <i class="fa-solid fa-ellipsis"></i>
                </button>        
            </div>
        </div>
    )
}

export default SingleDayStatus;