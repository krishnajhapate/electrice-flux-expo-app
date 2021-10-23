import React, { useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { TextInput, Button } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import BillCreate from "./../../components/BillCreate";

export default function CreateInvoice({ navigation }) {
    const [data, setData] = useState({
        name: "",
        price: "",
        description: "",
        country: "India",
        businessName: "",
        email: "",
        address: "",
        phone: "",
        city: "Bhopal",
        zip: "",
        state: "Madhya Pradesh",
        edit: false,
    });
    const [items, setItems] = useState([
        // {
        //     itemName: "Ac Service Repair",
        //     quantity: "1",
        //     rate: "1",
        //     amount: "1",
        // },
    ]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Create Bill",
            headerStyle: {
                backgroundColor: "#2E8BC0",
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
        <View style={tw`h-full bg-blue-50 `}>
            <ScrollView style={tw``}>
                <Text style={tw`text-base mx-auto mt-1 `}>
                    Details of Customer
                </Text>
                {data.edit && (
                    <AddDetails
                        data={data}
                        setData={setData}
                        navigation={navigation}
                    />
                )}
                {!data.edit && (
                    <>
                        <DetailsofCustomer data={data} setData={setData} />
                        <BillCreate
                            items={items}
                            navigation={navigation}
                            setItems={setItems}
                        />
                    </>
                )}
            </ScrollView>
        </View>
    );
}

const AddDetails = ({ data, setData, navigation }) => {
    return (
        <ScrollView>
            <View style={tw`h-full flex-1 p-4`}>
                <TextInput
                    label="Name"
                    value={data.name}
                    style={tw`bg-white shadow-2xl mb-3`}
                    onChangeText={(text) => setData({ ...data, name: text })}
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
                    onChangeText={(text) => setData({ ...data, email: text })}
                />
                <TextInput
                    label="Phone"
                    value={data.phone}
                    style={tw`bg-white shadow-2xl mb-3`}
                    onChangeText={(text) => setData({ ...data, phone: text })}
                    keyboardType="number-pad"
                />
                <TextInput
                    label="City"
                    value={data.city}
                    style={tw`bg-white shadow-2xl mb-3`}
                    onChangeText={(text) => setData({ ...data, city: text })}
                />

                <TextInput
                    label="State"
                    value={data.state}
                    style={tw`bg-white shadow-2xl mb-3`}
                    onChangeText={(text) => setData({ ...data, state: text })}
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
                    onChangeText={(text) => setData({ ...data, country: text })}
                />
                <TextInput
                    label="Address"
                    value={data.address}
                    style={tw`bg-white shadow-2xl mb-3`}
                    onChangeText={(text) => setData({ ...data, address: text })}
                />

                <Button
                    onPress={() => setData({ ...data, edit: false })}
                    // loading={isPending}
                    contentStyle={tw` py-2 rounded-xl `}
                    style={tw`rounded-xl `}
                    mode="contained"
                >
                    Add Details
                </Button>
            </View>
        </ScrollView>
    );
};

const DetailsofCustomer = ({ data, setData }) => {
    return (
        <View style={tw` mt-3 mx-4`}>
            <Button
                onPress={() => setData({ ...data, edit: true })}
                // loading={isPending}
                contentStyle={tw` py-2 rounded-xl `}
                style={tw`rounded-xl mb-2`}
                mode="contained"
            >
                Edit Details
            </Button>
            <View style={tw`  ml-5 w-full`}>
                <View style={tw` mx-auto flex-row w-full`}>
                    <Text style={tw`font-bold w-1/2`}>Name: </Text>
                    <Text style={tw``}>{data.name}</Text>
                </View>
                <View style={tw` mx-auto flex-row w-full`}>
                    <Text style={tw`font-bold w-1/2`}>
                        Business/Company Name:
                    </Text>
                    <Text style={tw``}>{data.businessName}</Text>
                </View>
                <View style={tw` mx-auto flex-row w-full`}>
                    <Text style={tw`font-bold w-1/2`}>Email: </Text>
                    <Text style={tw``}>{data.email}</Text>
                </View>
                <View style={tw` mx-auto flex-row w-full`}>
                    <Text style={tw`font-bold w-1/2`}>Phone: </Text>
                    <Text style={tw``}>{data.phone}</Text>
                </View>
                <View style={tw` mx-auto flex-row w-full`}>
                    <Text style={tw`font-bold w-1/2`}>City: </Text>
                    <Text style={tw``}>{data.city}</Text>
                </View>
                <View style={tw` mx-auto flex-row w-full`}>
                    <Text style={tw`font-bold w-1/2`}>State: </Text>
                    <Text style={tw``}>{data.state}</Text>
                </View>
                <View style={tw` mx-auto flex-row w-full`}>
                    <Text style={tw`font-bold w-1/2`}>Postal/Zip Code: </Text>
                    <Text style={tw``}>{data.zip}</Text>
                </View>
                <View style={tw` mx-auto flex-row w-full`}>
                    <Text style={tw`font-bold w-1/2`}>Country: </Text>
                    <Text style={tw``}>{data.country}</Text>
                </View>
                <View style={tw` mx-auto flex-row w-full`}>
                    <Text style={tw`font-bold w-1/2`}>Address: </Text>
                    <Text style={tw``}>{data.address}</Text>
                </View>
            </View>
        </View>
    );
};
