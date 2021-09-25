import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'
import { useState } from 'react';
import { Button } from 'react-native-elements'
import { HELLO } from '@env'
import Firebase from '../services/firebase';


export default function Login({ navigation }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    console.log(HELLO)

    const handleLogin = async () => {
        try {
            await Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
                .then((res) => {
                    console.log(res)
                })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        Firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                console.log(user);
                
            }
            console.log(user)
        })
    }, [])

    return (
        <View style={tw`h-full bg-blue-50`}>

            <View style={tw`h-2/4 w-5/6 mx-auto  top-1/4 px-3   `}>

                <Text style={tw` text-black text-4xl py-3 text-blue-900 font-bold  `} >Login</Text>

                <View style={tw`my-2 mt-5`} >
                    <Input
                        placeholder='Email ID'
                        leftIcon={{ type: 'font-awesome-5', name: 'at', color: 'gray', marginRight: 7, size: 20 }}
                        value={credentials.email}
                        style={tw`text-base  border-0 `}
                        onChangeText={value => setCredentials({ ...credentials, email: value })}
                    />
                </View>

                <View style={tw` mb-7`} >
                    <Input
                        placeholder='Password'
                        leftIcon={{
                            type: 'font-awesome-5', name: 'lock', color: 'gray',
                            marginRight: 7, size: 20
                        }}
                        secureTextEntry={true}
                        value={credentials.password}
                        style={tw`text-base `}
                        onChangeText={value => setCredentials({ ...credentials, password: value })}
                    />
                </View>

                <Text onPress={() => console.log("Forget password")} style={tw`absolute top-44 right-4 text-blue-600`}>Forget?</Text>

                <Button
                    title="Login"
                    onPress={() => handleLogin()}
                    buttonStyle={tw`my-2 py-3 rounded-xl bg-blue-600`}
                />
                {/* <Button
                    title="Sign In "
                    // onPress={() => navigation.navigate('SignupScreen')}
                    buttonStyle={tw`my-2  `}
                    icon={
                        <Icon
                            name="google"
                            size={15}
                            color="white"
                        />}
                    iconRight={true}
                    onPress={() => handleLogin()}
                /> */}
                <Text style={tw`text-center text-gray-500 mt-4`} >New to Elctroflux?
                    <Text onPress={() => navigation.navigate("SignupScreen")} style={tw`text-blue-500`} > Register</Text>
                </Text>
            </View>

        </View>
    )
}
