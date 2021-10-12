import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
// import Settings from "./Settings";
// import Invoice from "./Invoice";
import Products from "./Products";
// import Services from "./Services";
import Login from "./Login";
import Signup from "./Signup";
// import { Icon } from "react-native-elements";
import Logout from "./Logout";
import { useDispatch, useSelector } from "react-redux";
import Firebase from "../services/firebase";
import { resetLogin, userLoggedin } from "../reducers/authReducer";
import tw from "tailwind-react-native-classnames";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DrawerHeaderStyle = {
    drawerLableShow: false,
    headerStyle: {
        backgroundColor: "#7B61F8",
    },
    headerTintColor: "white",
};

export default function Screens() {
    const { isLogin } = useSelector((state) => state.loginReducer);
    // const [isLogin] = useState(true)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     Firebase.auth().onAuthStateChanged((user) => {
    //         console.log(user);
    //         if (user) return dispatch(userLoggedin(user));
    //         return dispatch(resetLogin());
    //     });
    // }, [dispatch]);

    // useEffect(() => {
    //     console.log(isLogin);
    // }, [isLogin]);

    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    drawerActiveTintColor: "white",
                    drawerStyle: {
                        backgroundColor: "#9AC4F8",
                        width: 240,
                    },
                    headerBackTitle: "Back",
                }}
                initialRouteName="ProductScreen"
            >
                <Stack.Screen
                    name="LoginScreen"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="SignupScreen"
                    component={Signup}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="HomeScreen" component={Home} />
                <Stack.Screen name="ProductScreen" component={Products} />
            </Stack.Navigator>
        </>
    );
}

const Header = () => {
    const _goBack = () => console.log("Went back");

    const _handleSearch = () => console.log("Searching");

    const _handleMore = () => console.log("Shown more");
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Title" subtitle="Subtitle" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
    );
};

// function MainScreen() {
//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 tabBarStyle: [
//                     tw`rounded-xl h-16`,
//                     { backgroundColor: "#9AC4F8" },
//                 ],
//             }}
//             initialRouteName="Home"
//             activeColor="black"
//             options={{
//                 tabBarInactiveTintColor: "white",
//                 tabBarActiveTintColor: "white",
//             }}
//         >
//             <Tab.Screen
//                 name="HomeScreen"
//                 component={Home}
//                 options={{
//                     headerShown: false,
//                     tabBarShowLabel: false,
//                     tabBarInactiveTintColor: "#3d85c6",
//                     tabBarActiveTintColor: "white",
//                     tabBarIcon: ({ color }) => (
//                         <Icon
//                             name="home"
//                             type="font-awesome-5"
//                             size={26}
//                             color={color}
//                         />
//                     ),
//                 }}
//             />
//             <Tab.Screen
//                 name="InvoiceScreen"
//                 options={{
//                     headerShown: false,
//                     tabBarShowLabel: false,
//                     tabBarInactiveTintColor: "#3d85c6",
//                     tabBarActiveTintColor: "white",
//                     tabBarIcon: ({ color }) => (
//                         <Icon
//                             name="file-invoice"
//                             type="font-awesome-5"
//                             size={26}
//                             color={color}
//                         />
//                     ),
//                 }}
//                 component={Invoice}
//             />
//             <Tab.Screen
//                 name="Products"
//                 options={{
//                     headerShown: false,
//                     tabBarShowLabel: false,
//                     tabBarInactiveTintColor: "#3d85c6",
//                     tabBarActiveTintColor: "white",
//                     tabBarIcon: ({ color }) => {
//                         return (
//                             <Icon
//                                 name="category"
//                                 type="material"
//                                 size={26}
//                                 color={color}
//                             />
//                         );
//                     },
//                 }}
//                 component={Products}
//             />
//             <Tab.Screen
//                 name="Services"
//                 options={{
//                     headerShown: false,
//                     tabBarShowLabel: false,
//                     tabBarInactiveTintColor: "#3d85c6",
//                     tabBarActiveTintColor: "white",
//                     tabBarIcon: ({ color }) => {
//                         return (
//                             <Icon
//                                 name="servicestack"
//                                 type="font-awesome-5"
//                                 size={26}
//                                 color={color}
//                             />
//                         );
//                     },
//                 }}
//                 component={Services}
//             />
//         </Tab.Navigator>
//     );
// }
