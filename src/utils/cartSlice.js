import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // reducer is object that holds the action:and reducer function that hold logic to update the store
  reducers: {
    // addItem is action and it has reducer function
    // reducer ->2 parater ->old store data,action to it
    // action.payload is paremter we pass to the addItem action during dispatch
    addItem: (state, action) => {
      // dont mutate state in older redux -it was mandatory
      //   old code
      //   const newState = [...state.items];
      //   newState.push(action.payload);
      //   console.log(newState);
      //   return newState;
      //   direcly change the state
      //   and in new redux toolkit --> we need to mutate the state -- no need ot return
      //   behind the sceen redux do immutable state similar to above code --it is done with immer library

      state.items.push(action.payload);
    },
    // payload holds index of item
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    clearCart: (state) => {
      // this will make items array empty
      //   state wil have oroginal value we need to modify it
      //
      //   either mutate a state or return new state
      //   state.items.length = 0;
      return { items: [] };
    },
  },
});

// export the action and reducer
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer; // Export the reducer
