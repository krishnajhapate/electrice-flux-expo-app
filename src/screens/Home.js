import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

export default function Home({navigation}) {
    return (
        <View style={tw`h-full bg-blue-50 pt-6  `} >

            <View style={tw` h-full mx-auto ml-4 flex-row flex-wrap`}>

                <TouchableOpacity style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   mr-7 mb-8`}
                    onPress={()=>navigation.navigate("InvoiceScreen")}
                >
                    <View style={tw``} >
                        <Icon
                            name='credit-card'
                            type="material"
                            color='#009a00'
                            size={60}
                        />
                        <Text style={tw`text-center mt-4 text-base text-gray-600 `} >Create Bill</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   ml-2 mb-8`}
                    onPress={()=>navigation.navigate("ProductScreen")}
                    >
                    <View style={tw``} >
                        <Icon
                            name='category'
                            type="material"
                            color='blue'
                            size={60}
                        />
                        <Text style={tw`text-center mt-4 text-base text-gray-600 `} >Products</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   mr-7 mb-8`}
                    onPress={()=>navigation.navigate("Services")}
                
                >
                    <View style={tw``} >
                        <Icon
                            name='servicestack'
                            type="font-awesome-5"
                            color='#674ea7'
                            size={60}
                        />
                        <Text style={tw`text-center mt-4 text-base text-gray-600 `} >Services</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   ml-2 mb-8`}
                    onPress={()=>navigation.navigate("InvoiceScreen")}
                    >
                    <View style={tw``} >
                        <Icon
                            name='receipt'
                            type="font-awesome-5"
                            color='#0f4b55'
                            size={60}
                        />
                        <Text style={tw`text-center mt-4 text-base text-gray-600 `} >Invoice</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   mr-7 mb-8`}
                
                >
                    <View style={tw``} >
                        <Icon
                            name='rupee'
                            type="font-awesome"
                            color='#ffd966'
                            size={60}
                        />
                        <Text style={tw`text-center mt-4 text-base text-gray-600 `} >Today: 3000₹</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   ml-2 mb-8`}>
                    <View style={tw``} >
                        <Icon
                            name='account-balance'
                            type="material"
                            color='#3d85c6'
                            size={60}
                        />
                        <Text style={tw`text-center mt-4 text-base text-gray-600 `} >Total: 54331₹</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   mr-7 mb-8`}
                    onPress={()=>navigation.navigate("Settings")}
                
                >
                    <View style={tw``} >
                        <Icon
                            name='settings'
                            type="material"
                            color='black'
                            size={60}
                        />
                        <Text style={tw`text-center mt-4 text-base text-gray-600 `} >Settings</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   ml-2 mb-8`}
                    onPress={()=>navigation.navigate("Logout")}
                
                >
                    <View style={tw``} >
                        <Icon
                            name='door-open'
                            type="font-awesome-5"
                            color='gray'
                            size={60}
                        />
                        <Text style={tw`text-center mt-4 text-base text-gray-600 `} >Logout</Text>
                    </View>
                </TouchableOpacity>

               



            </View>

        </View>
    )
}
