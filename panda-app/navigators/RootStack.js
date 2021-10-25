import React from 'react';
import { StyleSheet } from 'react-native';

import { Colors } from './../Components/styles';
const {primary, third} = Colors;

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// screens
import Login from './../Screens/Login'
import SignUp from './../Screens/SignUp';
import Welcome from './../Screens/Welcome';
import Home from './../Screens/Home';
import Targets from './../Screens/Targets'

const Stack = createNativeStackNavigator();

const MyTheme ={
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#fff'
    },
};

const RootStack = () => {
    return(
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Targets"
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="Targets" component={Targets}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;

