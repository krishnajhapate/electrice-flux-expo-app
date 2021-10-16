import React, { useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { TextInput, Button } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

export default function CreateInvoice({ navigation }) {
    const [data, setData] = useState({
        name: "",
        price: "",
        description: "",
        country: "",
        businessName: "",
        email: "",
        address: "",
        phone: "",
        city: "",
        zip: "",
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Create Bill",
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
        <View style={tw`h-full bg-blue-50`}>
            <Text style={tw`text-base mx-auto mt-4 `}>Details of Customer</Text>

            <ScrollView>
                <View style={tw`h-full flex-1 p-4`}>
                    <TextInput
                        label="Name"
                        value={data.name}
                        style={tw`bg-white shadow-2xl mb-3`}
                        onChangeText={(text) =>
                            setData({ ...data, name: text })
                        }
                    />
                    <TextInput
                        label="Business/Compnay Name"
                        value={String(data.businessName)}
                        style={tw`bg-white shadow-2xl mb-3`}
                        onChangeText={(text) =>
                            setData({ ...data, businessName: text })
                        }
                    />
                    <TextInput
                        label="Email"
                        value={String(data.email)}
                        style={tw`bg-white shadow-2xl mb-3`}
                        onChangeText={(text) =>
                            setData({ ...data, email: text })
                        }
                    />
                    <TextInput
                        label="Phone"
                        value={data.phone}
                        style={tw`bg-white shadow-2xl mb-3`}
                        onChangeText={(text) =>
                            setData({ ...data, phone: text })
                        }
                        keyboardType="number-pad"
                    />
                    <TextInput
                        label="City"
                        value={data.city}
                        style={tw`bg-white shadow-2xl mb-3`}
                        onChangeText={(text) =>
                            setData({ ...data, city: text })
                        }
                    />

                    <TextInput
                        label="State"
                        value={data.state}
                        style={tw`bg-white shadow-2xl mb-3`}
                        onChangeText={(text) =>
                            setData({ ...data, state: text })
                        }
                    />
                    <TextInput
                        label="Postal Code/ Zip Code"
                        value={data.zip}
                        style={tw`bg-white shadow-2xl mb-3`}
                        onChangeText={(text) => setData({ ...data, zip: text })}
                        keyboardType="number-pad"
                    />
                    <TextInput
                        label="Country"
                        value={data.country}
                        style={tw`bg-white shadow-2xl mb-3`}
                        onChangeText={(text) =>
                            setData({ ...data, country: text })
                        }
                    />
                    <TextInput
                        label="Address"
                        value={data.address}
                        style={tw`bg-white shadow-2xl mb-3`}
                        onChangeText={(text) =>
                            setData({ ...data, address: text })
                        }
                    />

                    <Button
                        onPress={() => navigation.navigate("HomeScreen")}
                        // loading={isPending}
                        contentStyle={tw` py-2 rounded-xl `}
                        style={tw`rounded-xl `}
                        mode="contained"
                    >
                        Add Details
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
}
