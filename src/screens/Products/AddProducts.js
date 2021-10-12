import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { FAB, IconButton, List, Portal } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

export default function AddProduct({ navigation }) {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Products",
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
            <View style={tw`h-full flex-1`}>
                <FlatList
                    data={tempData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

                <FAB
                    small
                    style={[
                        tw`bottom-0 absolute m-12 p-3 rounded-full right-0 `,
                        { backgroundColor: "darkgreen" },
                    ]}
                    size={50}
                    icon="plus"
                    color="white"
                    onPress={() => console.log("Pressed")}
                />
            </View>
        </View>
    );
}


