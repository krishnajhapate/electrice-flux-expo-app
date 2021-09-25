import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home';
import Settings from './Settings';
import Invoice from './Invoice';
import Products from './Products';
import Services from './Services';
import tw from 'tailwind-react-native-classnames'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()


const DrawerHeaderStyle = {
    headerStyle: {
        backgroundColor: '#9AC4F8',
    },
    headerTintColor: '#fff',
}

export default function Screens() {
    return (
        <Drawer.Navigator initialRouteName="Home"
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
            <Stack.Screen
                name="Logout"
                component={() => (<Text>Logout</Text>)}
                options={DrawerHeaderStyle}

            />
        </Drawer.Navigator>
    )
}

const TabOptions = {
    headerShown: false
}

function MainScreen() {
    return (
        <Tab.Navigator

            screenOptions={{
                headerStyle: {
                    backgroundColor: "#9AC4F8",
                },
                headerTintColor: "white",
                headerBackTitle: "Back",
            }}
        >
            <Tab.Screen name="HomeScreen" component={Home}
                options={TabOptions}
            />
            <Tab.Screen
                name="InvoiceScreen"
                options={TabOptions}
                component={Invoice}
            />
            <Tab.Screen
                name="Products"
                options={TabOptions}
                component={Products}
            />
            <Tab.Screen
                name="Services"
                options={TabOptions}
                component={Services}
            />
        </Tab.Navigator>
    );
}