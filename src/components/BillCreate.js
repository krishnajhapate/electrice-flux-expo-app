import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput, Button } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

export default function BillCreate({ items, setItems }) {
    console.log(items);
    const [currentItem, setCurrentItem] = useState({
        itemName: "",
        show: false,
        quantity: "1",
        rate: "1",
        amount: "1",
    });
    return (
        <View style={tw`mt-5 w-11/12 mx-auto bg-blue-50`}>
            <Text
                style={tw`font-bold text-lg text-white text-center mb-3 bg-gray-600 rounded p-1`}
            >
                Items (Total {items.length})
            </Text>

            <View>
                {items && (
                    <ShowDetails
                        items={items}
                        setCurrentItem={setCurrentItem}
                    />
                )}
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
                multiline={true}
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
            {}
            <Button
                onPress={() => setData({ ...currentItem, edit: false })}
                // loading={isPending}
                contentStyle={tw` py-2 rounded-xl `}
                style={tw`rounded-xl `}
                mode="contained"
            >
                Add Item
            </Button>
        </View>
    );
};

const ShowDetails = ({ items, setCurrentItem }) => {
    return (
        <View>
            {/* <View style={tw`flex-row justify-between  bg-gray-700 p-1 rounded`}>
                <Text style={tw`text-xs text-white`}>Sno.</Text>
                <Text style={tw`text-xs w-1/4 text-white`}>Item</Text>
                <Text style={tw`text-xs text-white`}>Rate</Text>
                <Text style={tw`text-xs text-white`}>Quantity</Text>
                <Text style={tw`text-xs text-white`}>Amount</Text>
            </View> */}
            {items.map((item, idx) => (
                <TouchableOpacity
                    key={idx}
                    onPress={() => setCurrentItem({ ...item, indx: idx })}
                >
                    <View
                        style={tw` border-gray-400 border justify-between mb-4  p-1 rounded`}
                    >
                        <View style={tw` flex-row  `}>
                            <Text style={tw`font-bold text-sm `}> Item: </Text>
                            <Text style={tw`px-2`}>{item.itemName}</Text>
                        </View>
                        <View style={tw`flex-row justify-between`}>
                            <Text style={tw` `}>
                                <Text style={tw`font-bold text-sm`}> Rate: </Text> ₹
                                {item.rate}
                            </Text>
                            <Text style={tw` `}>
                                <Text style={tw`font-bold text-sm`}> Quantity: </Text>{" "}
                                {item.quantity}
                            </Text>
                            <Text style={tw` `}>
                                <Text style={tw`font-bold text-sm`}> Amount: </Text> ₹
                                {item.amount}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};
