
// redux toolkit functions to create slice and async thunk
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// list of image url's to render new image on home screen every time the page re-renders
import { DisplayImage } from "../../Data/DisplayImage";


// initial state of redux state
const initialState = { 
                    //  list of all the habits selected by an user
                    habits:[],
                    // to show new quote on home screen
                    quote:{},
                    // to know whether user clicked on any habit in suggestion list on home screen
                    suggestionSelected:null,
                    // to show status of a habit on "Your habits" page
                    showStatus:null,
                    // image url to show image on home page
                    displayImageUrl:'' 
                }


// fetching list of quotes to show on screen 
export const quoteFetchThunk = createAsyncThunk(
    'quotes',
    async () =>{
        // fetching the quote
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        // passing data to extrareducer
        return data;
    }
)



// creating Slice to create reducer and extraReducer
const habitSlice = createSlice({
    // name
    name:'habitTracker',
    // initial State of Slice
    initialState,
    // list of reducers
    reducers:{
        // add a new habit to Habits array
        addHabit:(state,action) => {
            state.habits = [...state.habits,action.payload];
            state.showStatus = null;
        },
        /* if user click on a habit suggestion add it inside the value of variable so that 
           later it can be added in input tag of "ADD HABIT" section */
        setSuggestionSelected:(state,action)=> {
            // store the habit
            state.suggestionSelected = action.payload;
        },
        // to show stats of a habit when user click on a habit from his selected habit list
        setShowStatus:(state,action) => {
            // store the habit
            state.showStatus = action.payload;
        },
        // toggle the status of a habit on a specific day
        //  done , not done , pending 
        toggleHabitStatus:(state,action) => {
            // getting values passed in the function 
            // habitIndex = index of habit 
            // dayIndex = index of day
            // status = status of the habit {true = done, false = not done, null = pending}
            const {habitIndex,dayIndex,status} = action.payload;
            
            // this function works in case of "screen below medium width"
            // if showStaus doesn't has the current click habit then store the habit from habit list
            if(state.showStatus === null){
                state.showStatus = state.habits[habitIndex];
            }

            // if the passed status if true, set habit as done
            if(status){
                // if already done then return
                if(state.showStatus.weekStatus[dayIndex]){
                    return;
                }
                // increase the number of days on which task is done
                state.showStatus.completedDays++;
            }
            // if the passed status is false, set habit as not done
            else if( status === false){
                // if already not done, return
                if(state.showStatus.weekStatus[dayIndex] === false){
                    return;
                }
                // if the task was previously done
                else if(state.showStatus.weekStatus[dayIndex]){
                    // decrease the number of task done days
                    state.showStatus.completedDays--;
                }
            }
            // if passed status is null, set as pending habit
            else{
                // if already pending return
                if(state.showStatus.weekStatus[dayIndex] === null){
                    return;
                }
                // if the previous status was done
                else if(state.showStatus.weekStatus[dayIndex]){
                    // decrease the number of task done days
                    state.showStatus.completedDays--;
                }
            }
            
            // set the status of task as passed in the function
            state.showStatus.weekStatus[dayIndex] = status;
            // update the habits array { remove the old value of habit }
            const newHabits = state.habits.filter((habit) => habit.id !== state.showStatus.id);
            state.habits = newHabits;
            // append the changed status task in new habit list
            state.habits = [...state.habits, state.showStatus];
        }
    },
    // extraReducer
    extraReducers:(builder)=>{
        // when quote fetching is completed by the above async thunk function
        builder.addCase(quoteFetchThunk.fulfilled, (state,action) => {
            // get the array of all the fetched quotes
            const data = [...action.payload];
            // getting index randomly to show a random quote on each page render
            const index = Math.trunc(Math.random() * 12);
            // store the random quote in quote object
            state.quote = {...data[index]};
            // also store the image url form DisplayImage array randomly
            state.displayImageUrl = DisplayImage[index].url;
        })
    }
});


// export the habitReducer to create the store and accessing the state
export const habitReducer = habitSlice.reducer;

// exporting all the actions to use
export const { addHabit, setSuggestionSelected, 
                setShowStatus, toggleHabitStatus } = habitSlice.actions;


// exporting habitReducer's state to use state outside  
export const habitSelector = (state) => state.habitReducer;