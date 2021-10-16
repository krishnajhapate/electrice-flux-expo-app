import React, { useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { FAB, List } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

export default function Services({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Services",
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
    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.push("ServiceActionScreen", item)}
        >
            <List.Item
                title={item.name}
                description={item.description}
                left={(props) => (
                    <List.Icon
                        {...props}
                        icon={() => <Icon name="home-repair-service" />}
                    />
                )}
                right={() => (
                    <View>
                        <Text style={tw`font-semibold text-base text-right`}>
                            ₹{item.price}
                        </Text>
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
                    keyExtractor={(item) => String(item.id)}
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
                    onPress={() => navigation.navigate("ServiceActionScreen")}
                />
            </View>
        </View>
    );
}

const tempData = [
    {
        id: 1,
        name: "PVC Pipe",
        description: "lol",
        price: 340,
    },
    {
        id: 2,
        name: "Tafflon",
        description: "lol",
        price: 50,
    },
    {
        id: 4,
        name: "40 mm",
        description: "lol",
        price: 340,
    },
    {
        id: 11,
        name: "6 mm",
        description: "lol",
        price: 340,
    },
    {
        id: 123,
        name: "18 mm",
        description: "lol",
        price: 340,
    },
    {
        id: 451,
        name: "6 mm A",
        description: "lol",
        price: 340,
    },
    {
        id: 15,
        name: "6 mm B",
        description: "lol",
        price: 340,
    },
    {
        id: 2341,
        name: "Jeera",
        description: "lol",
        price: 340,
    },
    {
        id: 11312,
        name: "PVC Pipe",
        description: "lol",
        price: 340,
    },
    {
        id: 124242,
        name: "Tafflon",
        description: "lol",
        price: 50,
    },
    {
        id: 4323423,
        name: "40 mm",
        description: "lol",
        price: 340,
    },
    {
        id: 112341,
        name: "6 mm",
        description: "lol",
        price: 340,
    },
    {
        id: 12123412343,
        name: "18 mm",
        description: "lol",
        price: 340,
    },
    {
        id: 4512341,
        name: "6 mm A",
        description: "lol",
        price: 340,
    },
    {
        id: 1345,
        name: "6 mm B",
        description: "lol",
        price: 340,
    },
    {
        id: 234341,
        name: "Jeera",
        description: "lol",
        price: 340,
    },
];
