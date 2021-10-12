import React, { useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, TextInput } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

export default function AddProduct({ navigation }) {
    const [state, setState] = React.useState({ open: false });
    const [data, setData] = useState({
        name: "",
        price: "",
        mrp: "",
        description: "",
    });
    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;
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
    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <List.Item
                title={item.name}
                description={item.description}
                left={(props) => <List.Icon {...props} icon="folder" />}
                right={() => (
                    <View>
                        <Text style={tw`font-bold text-lg text-right`}>
                            ₹{item.price}
                        </Text>
                        <Text>Mrp: ₹{item.mrp}</Text>
                    </View>
                )}
            />
        </TouchableOpacity>
    );
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
                    onPress={() => handleLogin()}
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
