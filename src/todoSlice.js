import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState:[],
    reducers: {
        addTodo:(state, action) => {
            console.log(state);
            state.push(action.payload);

        }
    }
})
export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;