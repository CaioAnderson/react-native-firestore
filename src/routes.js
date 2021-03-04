import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Login from '../src/screens/Login';
import Home from '../src/screens/Home';
import CreateUser from '../src/screens/CreateUser';


export default function Routes(){
    return(
        <NavigationContainer>
            <Navigator>
                <Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Screen name='CreateUser' component={CreateUser}
                 options={{ title: '', headerTransparent: true }}/>
                <Screen name='Home' component={Home} options={{ headerShown: false }}/>
            </Navigator>
        </NavigationContainer>
    );
};