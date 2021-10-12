import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { Icon, Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { registerWithEmailPassword } from "../reducers/authReducer";
import Firebase from "../services/firebase";
import { TextInput, Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Signup({ navigation }) {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const { isPending, hasErrors } = useSelector(
        (state) => state.registerReducer
    );
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (hasErrors)
            return Alert.alert("Something went wrong", hasErrors, [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
            ]);
    }, [hasErrors]);

    const handleSignup = async () => {
        // dispatch(registerWithEmailPassword(details));
    };
    useEffect(() => {
        Firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                console.log(user);
            }
            console.log(user);
        });
    }, []);
    return (
        <View style={tw`h-full bg-blue-50`}>
            <View style={tw`h-2/4 w-5/6 mx-auto  top-1/4 px-3   `}>
                <Text
                    style={tw`text-black text-4xl py-3 text-blue-900 font-bold`}
                >
                    Sign Up
                </Text>

                <View style={tw`my-2 mt-5`}>
                    <TextInput
                        label="Email ID"
                        left={
                            <TextInput.Icon
                                name={() => (
                                    <Icon
                                        name="envelope"
                                        type="font-awesome-5"
                                        size={20}
                                        color="gray"
                                    />
                                )}
                                onPress={() => setShowPassword(!showPassword)}
                            />
                        }
                        style={tw`text-base  border-0 shadow-2xl bg-blue-50 `}
                        value={details.email}
                        onChangeText={(value) =>
                            setDetails({ ...details, email: value })
                        }
                    />
                </View>

                <View style={tw` my-1`}>
                    <TextInput
                        label="Full Name"
                        left={
                            <TextInput.Icon
                                name={() => (
                                    <Icon
                                        name="user"
                                        type="simple-line-icon"
                                        size={20}
                                        color="gray"
                                    />
                                )}
                                onPress={() => setShowPassword(!showPassword)}
                            />
                        }
                        value={details.name}
                        style={tw`text-base  border-0 shadow-2xl bg-blue-50 `}
                        onChangeText={(value) =>
                            setDetails({ ...details, name: value })
                        }
                    />
                </View>
                <View style={tw` my-2 mb-7`}>
                    <TextInput
                        label="Password"
                        secureTextEntry={!showPassword}
                        left={
                            <TextInput.Icon
                                name={() => (
                                    <Icon
                                        name="lock-outline"
                                        type="material"
                                        size={20}
                                        color="gray"
                                    />
                                )}
                                onPress={() => setShowPassword(!showPassword)}
                            />
                        }
                        right={
                            <TextInput.Icon
                                name={() => (
                                    <Icon
                                        name="eye"
                                        type="simple-line-icon"
                                        size={20}
                                        color="gray"
                                    />
                                )}
                                onPress={() => setShowPassword(!showPassword)}
                            />
                        }
                        value={details.password}
                        style={tw`text-base  border-0 shadow-2xl bg-blue-50 `}
                        onChangeText={(value) =>
                            setDetails({ ...details, password: value })
                        }
                    />
                </View>

                <Button
                    onPress={() => handleSignup()}
                    loading={isPending}
                    contentStyle={tw` py-2  rounded-xl bg-blue-800`}
                    style={tw`  rounded-xl bg-blue-800`}
                    mode="contained"
                >
                    Sign Up
                </Button>
                <Text style={tw`text-center text-gray-500 mt-4`}>
                    Already have account?
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignupScreen")}
                    >
                        <Text
                            onPress={() => navigation.navigate("LoginScreen")}
                            style={tw`text-blue-500`}
                        >
                            {" "}
                            Login
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    );
}
