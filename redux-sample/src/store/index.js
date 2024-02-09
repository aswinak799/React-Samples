import { configureStore, createSlice } from '@reduxjs/toolkit';
const initialCounterState = { value: 0, showCounter: true }

const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state, action){
            console.log(action)
            state.value += action.payload;
        },
        decrement(state){
            state.value--;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        }
    }
})

const authState = { isAuthenticated: false}
const authSlice = createSlice({
    name: 'authentication',
    initialState: authState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }

    }

})
const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer}
})


export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// const counterReducer = (state = initialState, action)=>{
//     if (action.type === 'INCREMENT'){
//         return {
//             counter: state.counter + action.payload,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'DECREMENT'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'TOGGLE'){
//         return {
//             ...state,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
    
// }

// const store = createStore(counterReducer);

// const store = createStore
export default store;