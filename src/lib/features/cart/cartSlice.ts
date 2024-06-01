import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
export interface CartState {
    cart: {
        ped: {
            standartPed: number,
            superPed: number,
            superPlusPed: number
        },
        gunlukPed: {
            gunlukPed: number,
            superGunlukPed: number,
        },
        tampon: {
            miniTampon: number,
            standartTampon: number,
            superTampon: number
        }
    }
}

// Define the initial state using that type
const initialState: CartState = {
    cart: {
        ped: {
            standartPed: 0,
            superPed: 0,
            superPlusPed: 0
        },
        gunlukPed: {
            gunlukPed: 0,
            superGunlukPed: 0,
        },
        tampon: {
            miniTampon: 0,
            standartTampon: 0,
            superTampon: 0
        }
    }
}

export type PayloadType = {
    pedType: string;
    value: number;
}

export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

        setPed: (state, action: PayloadAction<PayloadType>) => {
            state.cart.ped[action.payload.pedType as keyof typeof state.cart.ped] = action.payload.value
        },

        setGunlukPed: (state, action: PayloadAction<PayloadType>) => {
            state.cart.gunlukPed[action.payload.pedType as keyof typeof state.cart.gunlukPed] = action.payload.value
        },

        setTampon: (state, action: PayloadAction<PayloadType>) => {
            state.cart.tampon[action.payload.pedType as keyof typeof state.cart.tampon] = action.payload.value
        }
    }
})

export const { setPed, setGunlukPed, setTampon } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer