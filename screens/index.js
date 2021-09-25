import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home';
import Settings from './Settings';
import Invoice from './Invoice';
import Products from './Products';
import Services from './Services';
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

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
    const [user, setUser] = useState(true)

    return (
        <>

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
        // inactiveColor="#3e2465"

        >
            <Tab.Screen name="HomeScreen" component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ tintcolor }) => (
                        <Icon name="home"
                            type="font-awesome-5"
                            size={26}
                            color="white" />
                    ),
                }}


            />
            <Tab.Screen
                name="InvoiceScreen"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ tintcolor }) => (
                        <Icon name="file-invoice"
                            type="font-awesome-5"
                            size={26}
                            color="white" />
                    ),
                }}
                component={Invoice}
            />
            <Tab.Screen
                name="Products"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ tintcolor }) => (
                        <Icon name="product-hunt"
                            type="font-awesome-5"
                            size={26}
                            color="white" />
                    ),
                }}
                component={Products}
            />
            <Tab.Screen
                name="Services"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ tintcolor }) => (
                        <Icon name="servicestack"
                            type="font-awesome-5"
                            size={26}
                            color="white" />
                    ),
                }}
                component={Services}
            />
        </ Tab.Navigator>
    );
}