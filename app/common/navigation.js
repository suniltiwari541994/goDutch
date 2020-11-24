
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'
import SetupAccount from '../screens/setupAccount'
import ViewDetail from '../screens/viewDetail'


const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"Home"}
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SetupAccount" component={SetupAccount} />
                <Stack.Screen name="ViewDetail" component={ViewDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;