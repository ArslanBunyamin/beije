import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
export interface CartState {
    cart: {
        ped: {
            standartPed: { name: string, quantity: number, pricePerTen: number },
            superPed: { name: string, quantity: number, pricePerTen: number },
            superPlusPed: { name: string, quantity: number, pricePerTen: number }
        },
        gunlukPed: {
            gunlukPed: { name: string, quantity: number, pricePerTen: number },
            superGunlukPed: { name: string, quantity: number, pricePerTen: number },
        },
        tampon: {
            miniTampon: { name: string, quantity: number, pricePerTen: number },
            standartTampon: { name: string, quantity: number, pricePerTen: number },
            superTampon: { name: string, quantity: number, pricePerTen: number }
        }
    }
}

// Define the initial state using that type
const initialState: CartState = {
    cart: {
        ped: {
            standartPed: { name: "Standart Ped", quantity: 0, pricePerTen: 19 },
            superPed: { name: "Süper Ped", quantity: 0, pricePerTen: 19 },
            superPlusPed: { name: "Süper+ Ped", quantity: 0, pricePerTen: 19 }
        },
        gunlukPed: {
            gunlukPed: { name: "Günlük Ped", quantity: 0, pricePerTen: 19 },
            superGunlukPed: { name: "Süper Günlük Ped", quantity: 0, pricePerTen: 19 },
        },
        tampon: {
            miniTampon: { name: "Mini Tampon", quantity: 0, pricePerTen: 19 },
            standartTampon: { name: "Standart Tampon", quantity: 0, pricePerTen: 19 },
            superTampon: { name: "Süper tampon", quantity: 0, pricePerTen: 19 }
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
            state.cart.ped[action.payload.pedType as keyof typeof state.cart.ped].quantity = action.payload.value
        },

        setGunlukPed: (state, action: PayloadAction<PayloadType>) => {
            state.cart.gunlukPed[action.payload.pedType as keyof typeof state.cart.gunlukPed].quantity = action.payload.value
        },

        setTampon: (state, action: PayloadAction<PayloadType>) => {
            state.cart.tampon[action.payload.pedType as keyof typeof state.cart.tampon].quantity = action.payload.value
        },

        pedSifirla: (state) => {
            state.cart.ped = initialState.cart.ped
        },
        gunlukPedSifirla: (state) => {
            state.cart.gunlukPed = initialState.cart.gunlukPed
        },
        tamponSifirla: (state) => {
            state.cart.tampon = initialState.cart.tampon
        }
    }
})

export const { setPed, setGunlukPed, setTampon, pedSifirla, gunlukPedSifirla, tamponSifirla } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer