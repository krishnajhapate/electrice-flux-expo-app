import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput, Button } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

const initTemp = {
    itemName: "",
    quantity: "1",
    rate: "1",
    amount: "1",
};
const iniActions = {
    show: false,
    edit: false,
    index: null,
};

export default function BillCreate({ items, setItems }) {
    console.log(items);
    const [currentItem, setCurrentItem] = useState(initTemp);

    const [currentActions, setCurrentActions] = useState(iniActions);
    const handleAdd = () => {
        setItems([...items, currentItem]);
        setCurrentItem(initTemp);
    };
    const handleDelete = (index) => {
        let newArray = items;
        delete newArray[index];
        setItems(newArray);
        setCurrentItem(initTemp);
        setCurrentActions(iniActions);
    };

    const handleUpdate = (index) => {
        let newArray = items;
        newArray[index] = currentItem;
        setItems(newArray);
        setCurrentItem(initTemp);
        setCurrentActions(iniActions);
    };
    return (
        <View style={tw`my-5 w-11/12  mx-auto bg-blue-50`}>
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
                        setCurrentActions={setCurrentActions}
                    />
                )}
                <AddItemForm
                    currentItem={currentItem}
                    setCurrentItem={setCurrentItem}
                    setCurrentActions={setCurrentActions}
                    currentActions={currentActions}
                    handleAdd={handleAdd}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                />
            </View>
        </View>
    );
}

const AddItemForm = ({
    currentItem,
    setCurrentItem,
    handleAdd,
    currentActions,
    setCurrentActions,
    handleDelete,
    handleUpdate,
}) => {
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
            <Text style={tw`mb-2`}>
                Amount: ₹
                {String(
                    Number(currentItem.quantity) * Number(currentItem.rate)
                )}{" "}
            </Text>
            <View style={tw`flex-row justify-between`}>
                <TextInput
                    label="Qantity"
                    onChangeText={(text) =>
                        setCurrentItem({
                            ...currentItem,
                            quantity: String(text),
                        })
                    }
                    value={currentItem.quantity}
                    keyboardType="number-pad"
                    style={[tw`bg-blue-50 shadow-2xl mb-3  `, { width: 178 }]}
                />
                <TextInput
                    label="Rate in ₹"
                    onChangeText={(text) =>
                        setCurrentItem({ ...currentItem, rate: String(text) })
                    }
                    value={currentItem.rate}
                    keyboardType="number-pad"
                    style={[tw`bg-blue-50 shadow-2xl mb-3 `, { width: 178 }]}
                />
            </View>
            {currentActions.edit ? (
                <View
                    style={tw`flex flex-row w-full mx-auto justify-around mt-5`}
                >
                    <Button
                        onPress={() => handleDelete(currentItem.index)}
                        // loading={isPending}
                        contentStyle={tw` py-2 rounded-xl `}
                        style={tw`rounded-xl w-1/3 bg-red-700`}
                        mode="contained"
                    >
                        Delete
                    </Button>
                    <Button
                        onPress={() => handleUpdate(currentItem.index)}
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
                    onPress={handleAdd}
                    // loading={isPending}
                    contentStyle={tw` py-2 rounded-xl `}
                    style={tw`rounded-xl `}
                    mode="contained"
                >
                    Add Item
                </Button>
            )}
        </View>
    );
};

const ShowDetails = ({ items, setCurrentItem, setCurrentActions }) => {
    return (
        <View>
            {items.map((item, idx) => (
                <TouchableOpacity
                    key={idx}
                    onPress={() => {
                        setCurrentActions((actions) => {
                            return { actions, edit: true, index: idx };
                        });
                        setCurrentItem({ ...item, index: idx });
                    }}
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
                                <Text style={tw`font-bold text-sm`}>
                                    {" "}
                                    Rate:{" "}
                                </Text>{" "}
                                ₹{item.rate}
                            </Text>
                            <Text style={tw` `}>
                                <Text style={tw`font-bold text-sm`}>
                                    {" "}
                                    Quantity:{" "}
                                </Text>{" "}
                                {item.quantity}
                            </Text>
                            <Text style={tw` `}>
                                <Text style={tw`font-bold text-sm`}>
                                    {" "}
                                    Amount:{" "}
                                </Text>{" "}
                                ₹{item.amount}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const tempData = [
    {
        id: 1,
        name: "PVC Pipe",
        description: "lol",
        price: 340,
        mrp: 120,
    },
    {
        id: 2,
        name: "Tafflon",
        description: "lol",
        price: 50,
        mrp: 10,
    },
    {
        id: 4,
        name: "40 mm",
        description: "lol",
        price: 340,
        mrp: 120,
    },
    {
        id: 11,
        name: "6 mm",
        description: "lol",
        price: 340,
        mrp: 120,
    },
    {
        id: 123,
        name: "18 mm",
        description: "lol",
        price: 340,
        mrp: 120,
    },
    {
        id: 451,
        name: "6 mm A",
        description: "lol",
        price: 340,
        mrp: 120,
    },
    {
        id: 15,
        name: "6 mm B",
        description: "lol",
        price: 340,
        mrp: 120,
    },
    {
        id: 2341,
        name: "Jeera",
        description: "lol",
        price: 340,
        mrp: 120,
    },
    {
        id: 11312,
        name: "PVC Pipe",
        description: "lol",
        price: 340,
        mrp: 120,
    },
    {
        id: 124242,
        name: "Tafflon",
        description: "lol",
        price: 50,
        mrp: 10,
    },
    {
        id: 4323423,
        name: "40 mm",
        description: "lol",
        price: 340,
        mrp: 120,
    },
    {
        id: 112341,
        name: "6 mm",
        description: "lol",
        price: 340,
        mrp: 120,
    },
    {
        id: 12123412343,
        name: "18 mm",
        description: "lol",
        price: 340,
        mrp: 120,
    },
    {
        id: 4512341,
        name: "6 mm A",
        description: "lol",
        price: 340,
        mrp: 120,
    },
    {
        id: 1345,
        name: "6 mm B",
        description: "lol",
        price: 340,
        mrp: 120,
    },
    {
        id: 234341,
        name: "Jeera",
        description: "lol",
        price: 340,
        mrp: 120,
    },
];
