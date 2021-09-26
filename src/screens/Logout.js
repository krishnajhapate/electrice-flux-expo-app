import React, { useEffect } from "react"
import { View } from "react-native"
import { Text } from "react-native-elements"
import Firebase from "../services/firebase"

const Logout = ({ navigation }) => {

    useEffect(() => {
        Firebase.auth().signOut()
        navigation.navigate("LoginScreen")
    })

    return (
        <View>
            <Text>Logout</Text>
        </View>
    )

}

export default Logout