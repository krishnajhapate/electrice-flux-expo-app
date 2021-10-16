import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

export default function Home({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Dashboard",
            headerStyle: {
                backgroundColor: "darkgreen",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.push("HomeScreen")}
                    style={{ marginRight: 10 }}
                >
                    <Icon name="user-alt" type="font-awesome-5" color="white" />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    return (
        <View style={tw`h-full bg-blue-50 pt-6  `}>
            <View style={tw` h-full mx-auto ml-4 flex-row flex-wrap`}>
                <TouchableOpacity
                    style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   mr-7 mb-8`}
                    onPress={() => navigation.navigate("InvoiceScreen")}
                >
                    <View style={tw``}>
                        <Icon
                            name="money-bill-alt"
                            type="font-awesome-5"
                            color="#009a00"
                            size={60}
                        />
                        <Text
                            style={tw`text-center mt-4 text-base text-gray-600 `}
                        >
                            Create Bill
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   ml-2 mb-8`}
                    onPress={() => navigation.navigate("ProductScreen")}
                >
                    <View style={tw``}>
                        <Icon
                            name="cart"
                            type="zocial"
                            color="blue"
                            size={60}
                        />
                        <Text
                            style={tw`text-center mt-4 text-base text-gray-600 `}
                        >
                            Products
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   mr-7 mb-8`}
                    onPress={() => navigation.navigate("ServicesScreen")}
                >
                    <View style={tw``}>
                        <Icon
                            name="home-repair-service"
                            type="material"
                            color="#674ea7"
                            size={60}
                        />
                        <Text
                            style={tw`text-center mt-4 text-base text-gray-600 `}
                        >
                            Services
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   ml-2 mb-8`}
                    onPress={() => navigation.navigate("InvoiceScreen")}
                >
                    <View style={tw``}>
                        <Icon
                            name="file-invoice-dollar"
                            type="font-awesome-5"
                            color="#0f4b55"
                            size={60}
                        />
                        <Text
                            style={tw`text-center mt-4 text-base text-gray-600 `}
                        >
                            Invoice
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   mr-7 mb-8`}
                >
                    <View style={tw``}>
                        <Icon
                            name="money"
                            type="material"
                            color="darkorange"
                            size={60}
                        />
                        <Text
                            style={tw`text-center mt-4 text-base text-gray-600 `}
                        >
                            Today: ₹ 3000
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   ml-2 mb-8`}
                >
                    <View style={tw``}>
                        <Icon
                            name="account-balance"
                            type="material"
                            color="#3d85c6"
                            size={60}
                        />
                        <Text
                            style={tw`text-center mt-4 text-base text-gray-600 `}
                        >
                            Total: ₹ 54331
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   mr-7 mb-8`}
                    onPress={() => navigation.navigate("SettingsScreen")}
                >
                    <View style={tw``}>
                        <Icon
                            name="settings"
                            type="material"
                            color="black"
                            size={60}
                        />
                        <Text
                            style={tw`text-center mt-4 text-base text-gray-600 `}
                        >
                            Settings
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`bg-blue-50 shadow-2xl w-5/12 rounded-lg p-5   ml-2 mb-8`}
                    // onPress={()=>navigation.navigate("Logout")}
                >
                    <View style={tw``}>
                        <Icon
                            name="logout"
                            type="ant-design"
                            color="#55272d"
                            size={60}
                        />
                        <Text
                            style={tw`text-center mt-4 text-base text-gray-600 `}
                        >
                            Logout
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
