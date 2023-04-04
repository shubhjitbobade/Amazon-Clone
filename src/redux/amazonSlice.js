import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    userInfo:null,
}

export  const amazonSlice=createSlice({
    name:"amazon",
    initialState,
    reducers:{
        addTocart:(state,action)=>{
            const item= state.products.find((item)=>item.id === action.payload.id)
            if(item){
                item.quantity += action.payload.quantity;
            }else(
                state.products.push(action.payload)
            )},
            incrementQuantity:(state,action)=>{
             const item= state.products.find((item)=>item.id === action.payload) 
             item.quantity++
            },
            decrementQuantity:(state,action)=>{
             const item= state.products.find((item)=>item.id === action.payload) 
            if(item.quantity === 1){
                item.quantity=1
            }else{
                item.quantity--
            }
            },
            // Delete Item From Cart
            deleteItem:(state,action)=>{
                state.products=state.products.filter((item)=>item.id !== action.payload);
            },
            // Reset Cart To Intital State
            resetCart:(state)=>{
                state.products=[];
            },
            // Product Reducer End Here
            // UserInfo Reducer Start Here 
                   // User Authantication
            setUserInfo:(state,action)=>{
                state.userInfo=action.payload
            },
            userSignOut:(state)=>{
                    state.userInfo=null
            }
         }
    })
export const{addTocart,deleteItem,resetCart,incrementQuantity,decrementQuantity,setUserInfo,userSignOut}=amazonSlice.actions;
export default amazonSlice.reducer;