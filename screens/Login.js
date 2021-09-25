import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'
import { useState } from 'react';
import { set } from 'react-native-reanimated';
import { Button } from 'react-native-elements'
import {HELLO} from '@env'


export default function Login({ navigation }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    console.log(HELLO)

    return (
        <ImageBackground source={{ uri: 'https://source.unsplash.com/WLUHO9A_xik/1600x900' }} resizeMode="cover" style={tw`h-full`}>

            <View style={tw`h-2/4 bg-gray-700 opacity-90 top-1/4 mx-8 px-5 shadow rounded `}>

                <Text style={tw`text-center text-4xl py-3 text-blue-400 font-bold  `} >Login</Text>

                <View style={tw`my-2`} >
                    <Input
                        placeholder='Enter email'
                        leftIcon={{ type: 'font-awesome-5', name: 'envelope', color: 'white', marginRight: 10, size: 20 }}
                        style={tw`text-sm text-white`}
                        onChangeText={value => setCredentials({ ...credentials, email: value })}
                    />
                </View>

                <View style={tw`my-1`} >
                    <Input
                        placeholder='Enter password'
                        leftIcon={{
                            type: 'font-awesome-5', name: 'key', color: 'white',
                            marginRight: 10, size: 20
                        }}
                        value={credentials.password}
                        style={tw`text-sm text-white `}
                        onChangeText={value => setCredentials({ ...credentials, password: value })}
                    />
                </View>

                <Text onPress={() => console.log("Forget password")} style={tw`my-3 text-center text-blue-400`}>Forget Password?</Text>

                <Button
                    title="Login"
                    onPress={() => navigation.navigate('SignupScreen')}
                    buttonStyle={tw`my-2`}
                />
                <Button
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
                />

            </View>
        </ImageBackground>
    )
}
