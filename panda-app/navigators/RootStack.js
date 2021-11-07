import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import { Colors } from './../Components/styles';

// React Navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Login from './../Screens/Login'
import SignUp from './../Screens/SignUp';
import Profile from '../Screens/Profile';
import Home from './../Screens/Home';
import Targets from './../Screens/Targets';
import Reports from './../Screens/Reports';
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
        }
}

const headerStyleHome = {
    headerTitle: '',
    headerTransparent: true,
    headerStyle: {
        borderBottomWidth: 0,
    },
    headerLeft: ()=> null
}

const RootStack = () => {
    return(
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
            screenOptions={{
                headerShown: true
            }}
            initialRouteName="Login"
            >
                <Stack.Screen 
                    name="Login" 
                    component={Login}
                    options={headerStyle}
                    
                />
                <Stack.Screen 
                    name="Home" 
                    component={Home}
                    options={headerStyleHome}
                    
                />
                <Stack.Screen 
                    name="SignUp" 
                    component={SignUp}
                    options={headerStyle}
                />
                <Stack.Screen 
                    name="Profile" 
                    component={Profile}
                    options={headerStyle}
                />
                <Stack.Screen 
                    name="Targets" 
                    component={Targets}
                    options={headerStyle}
                />
                <Stack.Screen 
                    name="Reports" 
                    component={Reports}
                    options={headerStyle}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;