import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current:null,
}

const ReduceState = createSlice({
  name: "users",
  initialState,
  reducers: {
    LoginUser:(state,actions)=>{
        state.current = actions.payload
    }
  }
});

export const {LoginUser} = ReduceState.actions

export default ReduceState.reducer