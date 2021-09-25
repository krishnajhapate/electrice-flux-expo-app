import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'



export default function Login() {
    return (
        <ImageBackground source={{ uri: 'https://source.unsplash.com/daily' }} resizeMode="cover" style={tw`h-full`}>
            <View style={tw` `}>

                <Input
                    placeholder='INPUT WITH ICON'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />
            </View>
        </ImageBackground>
    )
}
