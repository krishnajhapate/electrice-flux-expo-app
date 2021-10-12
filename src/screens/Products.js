import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FAB, IconButton, List, Portal } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

export default function Products({ navigation }) {
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
    return (
        <View style={tw`h-full bg-blue-50`}>
            <View style={tw`h-full flex-1`}>
                <List.Item
                    title="First Item"
                    description="Item description"
                    left={(props) => <List.Icon {...props} icon="folder" />}
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

const tempData = [
    {
        id: 1,
        name: "PVC Pipe",
        price: 340,
        mrp: 120,
    },
    {
        id: 2,
        name: "Tafflon",
        price: 50,
        mrp: 10,
    },
    {
        id: 4,
        name: "PVC Pipe",
        price: 340,
        mrp: 120,
    },
    {
        id: 1,
        name: "PVC Pipe",
        price: 340,
        mrp: 120,
    },
    {
        id: 1,
        name: "PVC Pipe",
        price: 340,
        mrp: 120,
    },
    {
        id: 1,
        name: "PVC Pipe",
        price: 340,
        mrp: 120,
    },
    {
        id: 1,
        name: "PVC Pipe",
        price: 340,
        mrp: 120,
    },
    {
        id: 1,
        name: "PVC Pipe",
        price: 340,
        mrp: 120,
    },
];
