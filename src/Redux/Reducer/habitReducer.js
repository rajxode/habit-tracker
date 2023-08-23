import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = { habits:[],    
                    quote:{},
                    suggestionSelected:null,
                    showStatus:null,
                    weekStatus : [null,null,null,null,null,null,null] 
                }


export const quoteFetchThunk = createAsyncThunk(
    'quotes',
    async () =>{
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        return data;
    }
)


const habitSlice = createSlice({
    name:'habitTracker',
    initialState,
    reducers:{
        addHabit:(state,action) => {
            state.habits = [...state.habits,action.payload];
            state.showStatus = null;
        },
        setSuggestionSelected:(state,action)=> {
            state.suggestionSelected = action.payload;
        },
        setShowStatus:(state,action) => {
            state.showStatus = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(quoteFetchThunk.fulfilled, (state,action) => {
            const data = [...action.payload];
            const index = Math.trunc(Math.random() * 15);
            state.quote = {...data[index]};
        })
    }
});


export const habitReducer = habitSlice.reducer;

export const { addHabit, setSuggestionSelected, setShowStatus } = habitSlice.actions;

export const habitSelector = (state) => state.habitReducer;