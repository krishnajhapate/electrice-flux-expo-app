import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Firebase from '../services/firebase'


export const loginWithEmailPassword = createAsyncThunk(
    'users/login',
    async ({ email, password }, thunkAPI,) => {
        // console.log(email, password)
        const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
        return response
    }
)


export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLogin: false,
        isSuccess: false,
        hasErrors: false,
        isPending:false,
        user: {}
    },
    reducers: {
        resetLogin:(state)=> state
    },
    extraReducers: {
        [loginWithEmailPassword.pending]: (state, action) => ({
            isLogin: false,
            isSuccess: false,
            hasErrors: false,
            isPending:true,
            user: {}
        }),
        [loginWithEmailPassword.fulfilled]: (state, payload) => {
            console.log(payload)
            return({
                isLogin: true,
                isSuccess: true,
                hasErrors: false,
                isPending:false,
                user: payload
            })
        },
        [loginWithEmailPassword.rejected]: (state, payload) => {
            console.log(payload.error.message)
            return({
                isLogin: false,
                isSuccess: false,
                hasErrors: payload.error.message,
                isPending:false,
                user: {}
            })
        },
      },
})

export const { resetLogin } = loginSlice.actions

const authReducers = {
    loginReducer: loginSlice.reducer,
}

export default authReducers