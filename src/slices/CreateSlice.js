import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
const userSlice=createSlice({
    name:'user list',
    initialState,
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        deleteUser(state,action){
            const deleteIndex=action.payload
            return state.filter((value,index)=> index !== deleteIndex)
        },
        editUser(state,action){
            const {index,user}=action.payload;
            state[index]=user;
        }
    }
})

export const {addUser,deleteUser,editUser}=userSlice.actions;
export default userSlice.reducer