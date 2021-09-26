import React, { useEffect } from "react"
import { View } from "react-native"
import { Text } from "react-native-elements"
// import { useDispatch } from "react-redux"
// import {  resetLogin } from "../reducers/authReducer"
import Firebase from "../services/firebase"

const Logout = ({ navigation }) => {
    // const dispatch = useDispatch()
    useEffect(() => {
        Firebase.auth().signOut()
        // dispatch(resetLogin())
    },[])


    return (
        <View>
            <Text>Logout</Text>
        </View>
    )

}

export default Logout