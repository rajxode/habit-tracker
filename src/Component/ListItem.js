

const ListItem = (props) => {
    const {habit} = props.habit;

    return(
        <div className="w-full h-11 bg-red-200 my-1 rounded p-1 flex items-center">
            {habit}
        </div>
    )
}


export default ListItem;