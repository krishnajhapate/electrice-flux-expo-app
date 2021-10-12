import React, { useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmailPassword } from "../reducers/authReducer";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login({ navigation }) {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const { isPending, hasErrors } = useSelector((state) => state.loginReducer);

    const handleLogin = () => {
        // dispatch(loginWithEmailPassword(credentials));
    };

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

    return (
        <View style={tw`h-full bg-blue-50`}>
            <View style={tw`h-2/4 w-5/6 mx-auto  top-1/4 px-3   `}>
                <Text
                    style={tw` text-black  text-4xl py-3 text-blue-900 font-bold  `}
                >
                    Login
                </Text>

                <View style={tw`my-5 mt-5`}>
                    <TextInput
                        label="Email"
                        value={credentials.email}
                        style={tw`text-base  border-0 shadow-2xl bg-blue-50 `}
                        onChangeText={(value) =>
                            setCredentials({ ...credentials, email: value })
                        }
                    />
                </View>

                <View style={tw` mb-7 `}>
                    <TextInput
                        label="Password"
                        secureTextEntry={!showPassword}
                        value={credentials.password}
                        style={tw`text-base  shadow-2xl bg-blue-50`}
                        onChangeText={(value) =>
                            setCredentials({ ...credentials, password: value })
                        }
                        right={
                            <TextInput.Icon
                                name="eye"
                                onPress={() => setShowPassword(!showPassword)}
                            />
                        }
                    />
                </View>

                <TouchableOpacity
                    onPress={() => console.log("Forget password")}
                >
                    <Text style={tw`mb-4 text-blue-600`}>Forget Password?</Text>
                </TouchableOpacity>

                <Button
                    title="Login"
                    onPress={() => handleLogin()}
                    loading={isPending}
                    contentStyle={tw` py-2  rounded-xl bg-blue-800`}
                    style={tw`  rounded-xl bg-blue-800`}
                    mode="contained"
                >
                    Login
                </Button>
                <Text style={tw`text-center text-gray-500 mt-4`}>
                    New to Elctroflux?
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignupScreen")}
                    >
                        <Text style={tw`text-blue-500`}> Register</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    );
}
