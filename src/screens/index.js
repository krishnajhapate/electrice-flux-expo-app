import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home';
import Settings from './Settings';
import Invoice from './Invoice';
import Products from './Products';
import Services from './Services';
import Login from './Login';
import Signup from './Signup';
import { Icon } from 'react-native-elements'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()


const DrawerHeaderStyle = {
    drawerLableShow: false,
    headerStyle: {
        backgroundColor: '#9AC4F8',
    },
    headerTintColor: 'white',
}

export default function Screens() {
    const [user, setUser] = useState(false)

    return (
        <>

            {user ?
                <Drawer.Navigator
                    screenOptions={{
                        drawerActiveTintColor: "white",
                        drawerStyle: {
                            backgroundColor: '#9AC4F8',
                            width: 240,
                        },
                        headerBackTitle: "Back",
                    }}
                >
                    <Drawer.Screen
                        name="Home"
                        component={MainScreen}
                        options={DrawerHeaderStyle}

                    />
                    <Stack.Screen
                        name="Settings"
                        component={Settings}
                        options={DrawerHeaderStyle}
                    />

                    {/* <Stack.Screen
                name="Logout"
                component={() => (<Text>Logout</Text>)}
                options={DrawerHeaderStyle}
                
            /> */}

                </Drawer.Navigator>
                :
                <Stack.Navigator
                    screenOptions={{
                        drawerActiveTintColor: "white",
                        drawerStyle: {
                            backgroundColor: '#9AC4F8',
                            width: 240,
                        },
                        headerBackTitle: "Back",
                    }}
                    initialRouteName="SignupScreen"
                >
                    <Stack.Screen name="SignupScreen" component={Signup}

                        options={{
                            headerShown: false
                        }} />
                    <Stack.Screen name="LoginScreen" component={Login}
                        options={{
                            headerShown: false
                        }}

                    />
                </Stack.Navigator>
            }
        </>
    )
}

const TabOptions = {
    headerShown: false,

}
const TabStyles = {

}

function MainScreen() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#9AC4F8",
                },
            }}
            initialRouteName="Home"
            activeColor="black"
            options={{
                tabBarInactiveTintColor: "white",
                tabBarActiveTintColor: "white",
            }}

        >
            <Tab.Screen name="HomeScreen" component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarInactiveTintColor: "gray",
                    tabBarActiveTintColor: "white",
                    tabBarIcon: ({ color }) => (
                        <Icon name="home"
                            type="font-awesome-5"
                            size={26}
                            color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="InvoiceScreen"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarInactiveTintColor: "gray",
                    tabBarActiveTintColor: "white",
                    tabBarIcon: ({ color }) => (
                        <Icon name="file-invoice"
                            type="font-awesome-5"
                            size={26}
                            color={color} />
                    ),
                }}
                component={Invoice}
            />
            <Tab.Screen
                name="Products"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarInactiveTintColor: "gray",
                    tabBarActiveTintColor: "white",
                    tabBarIcon: ({ color }) => {
                        console.log(color)
                        return (
                            <Icon name="product-hunt"
                                type="font-awesome-5"
                                size={26}
                                color={color}
                            />
                        )
                    },
                }}
                component={Products}
            />
            <Tab.Screen
                name="Services"

                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarInactiveTintColor: "gray",
                    tabBarActiveTintColor: "white",
                    tabBarIcon: ({ color }) => {
                        return (

                            <Icon name="servicestack"
                                type="font-awesome-5"
                                size={26}
                                color={color}
                            />
                        )
                    },
                }}
                component={Services}
            />
        </ Tab.Navigator>
    );
}