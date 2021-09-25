import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'


export default function Signup({navigation}) {
    const [details, setDetails] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleSignup = async () =>{
        
    }
    return (
        <View style={tw`h-full bg-blue-50`}>

            <View style={tw`h-2/4 w-5/6 mx-auto  top-1/4 px-3   `}>

                <Text style={tw`text-black text-4xl py-3 text-blue-900 font-bold`}>Sign Up</Text>

                <View style={tw`my-2 mt-5`} >
                    <Input
                        placeholder='Email ID'
                        leftIcon={{ type: 'font-awesome-5', name: 'at', color: 'gray', marginRight: 7, size: 20 }}
                        style={tw`text-base `}
                        value={details.email}
                        onChangeText={value => setDetails({ ...credentials, email: value })}
                    />
                </View>

                <View style={tw` my-1`} >
                    <Input
                        placeholder='Full Name'
                        leftIcon={{
                            type: 'font-awesome-5', name: 'fire', color: 'gray',
                            marginRight: 7, size: 20
                        }}
                        value={details.name}
                        style={tw`text-base `}
                        onChangeText={value => setDetails({ ...credentials, name: value })}
                    />
                </View>
                <View style={tw` my-2 mb-7`} >
                    <Input
                        placeholder='Password'
                        leftIcon={{
                            type: 'font-awesome-5', name: 'lock', color: 'gray',
                            marginRight: 7, size: 20
                        }}
                        secureTextEntry={true}
                        value={details.password}
                        style={tw`text-base `}
                        onChangeText={value => setDetails({ ...credentials, password: value })}
                    />
                </View>

              
                <Button
                    title="Sign Up"
                    onPress={() => handleSignup()}
                    buttonStyle={tw`my-2 py-3 rounded-xl bg-blue-600`}
                />
            
                <Text style={tw`text-center text-gray-500 mt-4`} >Already have account?
                    <Text onPress={() => navigation.navigate("LoginScreen")} style={tw`text-blue-500`} > Login</Text>
                </Text>
            </View>

        </View>

    )
}
