import React, { useEffect, useLayoutEffect, useState } from "react";
import { Alert } from "react-native";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, TextInput } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

export default function ServiceAction({ route, navigation }) {
    const [data, setData] = useState({
        name: "",
        price: "",
        description: "",
    });

    const handleAdd = () => {
        return Alert(data.name);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add New Service",
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

    useEffect(() => {
        if (route.params) {
            setData({ ...route.params, update: true });
        }
    }, [route]);

    return (
        <View style={tw`h-full bg-blue-50`}>
            <View style={tw`h-full flex-1 p-4`}>
                <TextInput
                    label="Service Name"
                    value={data.name}
                    style={tw`bg-white shadow-2xl mb-3`}
                    onChangeText={(text) => setData({ ...data, name: text })}
                />
                <TextInput
                    label="Price in ₹"
                    value={String(data.price)}
                    style={tw`bg-white shadow-2xl mb-3`}
                    onChangeText={(text) => setData({ ...data, price: text })}
                    keyboardType="number-pad"
                />

                <TextInput
                    label="Description"
                    value={data.description}
                    style={tw`bg-white shadow-2xl mb-3`}
                    multiline={true}
                    onChangeText={(text) =>
                        setData({ ...data, description: text })
                    }
                />

                {data.update ? (
                    <View
                        style={tw`flex flex-row w-full mx-auto justify-around mt-5`}
                    >
                        <Button
                            onPress={() =>
                                navigation.navigate("ServiceActionScreen")
                            }
                            // loading={isPending}
                            contentStyle={tw` py-2 rounded-xl `}
                            style={tw`rounded-xl w-1/3 bg-red-700`}
                            mode="contained"
                        >
                            Delete
                        </Button>
                        <Button
                            onPress={() =>
                                navigation.navigate("ServiceActionScreen")
                            }
                            // loading={isPending}
                            contentStyle={tw` py-2 rounded-xl `}
                            style={tw`rounded-xl w-1/3`}
                            mode="contained"
                        >
                            Update
                        </Button>
                    </View>
                ) : (
                    <Button
                        onPress={() =>
                            navigation.navigate("ServiceActionScreen")
                        }
                        // onPress={() => handleAdd()}
                        // loading={isPending}
                        contentStyle={tw` py-2  rounded-xl `}
                        style={tw`rounded-xl `}
                        mode="contained"
                    >
                        Add
                    </Button>
                )}
            </View>
        </View>
    );
}
