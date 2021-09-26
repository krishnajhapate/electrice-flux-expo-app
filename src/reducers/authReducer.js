import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Firebase from '../services/firebase'


export const loginWithEmailPassword = createAsyncThunk(
    'users/login',
    async ({ email, password }, thunkAPI,) => {
        // console.log(email, password)
        const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(response)
        return response.user
    }
)
export const logout = createAsyncThunk('users/logout'
, async(thunkAPI,{dispatch}) =>{
    console.log(dispatch,thunkAPI)
    await Firebase.auth().signOut()
    return  dispatch(resetLogin())
}
)

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLogin: false,
        isSuccess: false,
        hasErrors: false,
        isPending:false,
        user: null
    },
    reducers: {
        resetLogin:(state)=> ({
            isLogin: false,
            isSuccess: false,
            hasErrors: false,
            isPending:false,
            user: null
        }),
        userLoggedin:(state,payload)=>{
            console.log(payload)
            return({
                isLogin: false,
                isSuccess: false,
                hasErrors: false,
                isPending:false,
                user: null
            })
        }
    },
    extraReducers: {
        [loginWithEmailPassword.pending]: (state, action) => ({
            isLogin: false,
            isSuccess: false,
            hasErrors: false,
            isPending:true,
            user: null
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
                user: null
            })
        },
      },
})

export const { resetLogin ,userLoggedin } = loginSlice.actions

const authReducers = {
    loginReducer: loginSlice.reducer,
}

export default authReducers