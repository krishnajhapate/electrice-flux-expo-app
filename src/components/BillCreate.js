import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

export default function BillCreate({ items, setItems }) {
    const [currentItem, setCurrentItem] = useState({
        itemName: "Cobra",
        show: false,
        quantity: "1",
        rate: "1",
        amount: "1",
    });
    return (
        <View style={tw`mt-5 w-11/12 mx-auto bg-blue-50`}>
            <Text style={tw`font-bold text-lg text-center `}>Add Items</Text>

            <View>
                <ShowDetails />
                <AddItemForm
                    currentItem={currentItem}
                    setCurrentItem={setCurrentItem}
                />
            </View>
        </View>
    );
}

const AddItemForm = ({ currentItem, setCurrentItem }) => {
    return (
        <View style={tw`mt-5`}>
            <TextInput
                label="Item"
                onChangeText={(text) =>
                    setCurrentItem({ ...currentItem, itemName: text })
                }
                value={currentItem.itemName}
                style={tw`bg-blue-50 shadow-2xl mb-3 `}
            />
            <TextInput
                label="Qantity"
                onChangeText={(text) =>
                    setCurrentItem({ ...currentItem, quantity: String(text) })
                }
                value={currentItem.quantity}
                keyboardType="number-pad"
                style={tw`bg-blue-50 shadow-2xl mb-3 `}
            />
            <TextInput
                label="Rate in ₹"
                onChangeText={(text) =>
                    setCurrentItem({ ...currentItem, rate: String(text) })
                }
                value={currentItem.rate}
                keyboardType="number-pad"
                style={tw`bg-blue-50 shadow-2xl mb-3 `}
            />
            <TextInput
                label="Amount in ₹"
                value={String(
                    Number(currentItem.rate) * Number(currentItem.quantity)
                )}
                disabled
                style={tw`bg-blue-50 shadow-2xl mb-3 `}
            />
        </View>
    );
};

const ShowDetails = ({ items }) => {
    return (
        <View>
            <View style={tw`flex-row justify-between  bg-gray-700 p-1 rounded`}>
                <Text style={tw`text-xs text-white`}>Sno.</Text>
                <Text style={tw`text-xs text-white`}>Item</Text>
                <Text style={tw`text-xs text-white`}>Rate</Text>
                <Text style={tw`text-xs text-white`}>Quantity</Text>
                <Text style={tw`text-xs text-white`}>Amount</Text>
            </View>

            <View style={tw`flex-row justify-between  bg-gray-700 p-1 rounded`}>
                <Text style={tw`text-xs text-white`}>Sno.</Text>
                <Text style={tw`text-xs text-white`}>Item</Text>
                <Text style={tw`text-xs text-white`}>Rate</Text>
                <Text style={tw`text-xs text-white`}>Quantity</Text>
                <Text style={tw`text-xs text-white`}>Amount</Text>
            </View>
        </View>
    );
};
