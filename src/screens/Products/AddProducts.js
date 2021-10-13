import React, { useLayoutEffect, useState } from "react";
import { Alert } from "react-native";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, TextInput } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

export default function AddProduct({ navigation, props }) {
    const [data, setData] = useState({
        name: "",
        price: "",
        mrp: "",
        description: "",
    });
    console.log(props, navigation);
    const handleAdd = () => {
        return Alert(data.name);
    };
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add Product",
            headerStyle: {
                backgroundColor: "darkgreen",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => alert("Hello Raju")}
                    style={{ marginRight: 10 }}
                >
                    <Icon name="user-alt" type="font-awesome-5" color="white" />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={tw`h-full bg-blue-50`}>
            <View style={tw`h-full flex-1 p-4`}>
                <TextInput
                    label="Product Name"
                    value={data.value}
                    style={tw`bg-white shadow-2xl mb-3`}
                    onChangeText={(text) => setData({ ...data, name: text })}
                />
                <TextInput
                    label="Price"
                    value={data.value}
                    style={tw`bg-white shadow-2xl mb-3`}
                    onChangeText={(text) => setData({ ...data, price: text })}
                />
                <TextInput
                    label="Mrp"
                    value={data.value}
                    style={tw`bg-white shadow-2xl mb-3`}
                    onChangeText={(text) => setData({ ...data, mrp: text })}
                />
                <TextInput
                    label="Description"
                    value={data.value}
                    style={tw`bg-white shadow-2xl mb-3`}
                    onChangeText={(text) =>
                        setData({ ...data, description: text })
                    }
                />

                <Button
                    onPress={() => handleAdd()}
                    // loading={isPending}
                    contentStyle={tw` py-2  rounded-xl `}
                    style={tw`rounded-xl `}
                    mode="contained"
                >
                    Add
                </Button>
            </View>
        </View>
    );
}
