import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice( {
    name: "cart",
    initialState : [],
    reducers : {
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            return state.filter( (item) => item.id !== action.payload )
        }
    }
} );

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;

/*
Add and remove basically 2 hi functions hai ki cart m add hoge ya cart se remove and initially cart m kuch bhi ni hai

reducers function input m 2 cheeje lete hai -- state , action
jo bhi reducers function ke andar tum as a parameter pass kar rahe ho usko access karte hai payload se -- action.payload darshata hai input parameter   
state darsha rha hai initial state and initial state hai teri [] empty array

ab humne remove wale m id send ki thi na toh bss jo id iske equal ni hogi vo hi rahegi baaki sab htt jayegi 


In Redux and Redux Toolkit, the term "state" generally refers to the current representation of data within your application. It's essentially a snapshot of your application's data at any given point in time.

name: This is just a name for your slice of state. In this case, it's named "cart" to represent a shopping cart.

initialState: This is the initial state of your slice. Here, it's an empty array because your shopping cart starts empty.

reducers: These are functions that define how your state can change

Here, state specifically refers to the current state of the shopping cart. It's an array that holds the items currently in the cart.

So, when we talk about state in this context, we are referring to an array that contains the items in the shopping cart. Initially, this array is empty (initialState: []), and it gets updated as items are added or removed from the cart.

In the add reducer, state.push(action.payload) modifies the state array by adding the action.payload (the new item to be added to the cart) to it.

*/