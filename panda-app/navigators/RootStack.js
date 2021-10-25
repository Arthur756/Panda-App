import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import { Colors } from './../Components/styles';
const {primary, third} = Colors;

// React Navigation
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

const headerStyle = {
        headerTitle: '',
        headerTransparent: true,
        headerStyle: {
            borderBottomWidth: 0,
        },
}
const RootStack = () => {
    return(
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
            screenOptions={{
                headerShown: true
            }}
            initialRouteName="Home"
            >
                <Stack.Screen 
                    name="Login" 
                    component={Login}
                    options={headerStyle}
                />
                <Stack.Screen 
                    name="Home" 
                    component={Home}
                    options={headerStyle}
                />
                <Stack.Screen 
                    name="SignUp" 
                    component={SignUp}
                    options={headerStyle}
                />
                <Stack.Screen 
                    name="Welcome" 
                    component={Welcome}
                    options={headerStyle}
                />
                <Stack.Screen 
                    name="Targets" 
                    component={Targets}
                    options={headerStyle}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;