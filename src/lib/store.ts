import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'

const rootReducer = combineReducers({ counter: counterSlice });

export const makeStore = () => {
    return configureStore({
        reducer: { counterSlice }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch']