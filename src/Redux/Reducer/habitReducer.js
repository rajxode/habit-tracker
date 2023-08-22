import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { quote:{} }


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

export const habitSelector = (state) => state.habitReducer;