import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'

const rootReducer = combineReducers({ cart: cartSlice });

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch']