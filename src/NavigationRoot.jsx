import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Bookmarks from './pages/Bookmarks';
import Settings from './pages/Settings';

var MainStack = createStackNavigator();

const NavigationRoot = () => (
    <NavigationContainer>
        <MainStack.Navigator mode="modal">
            <MainStack.Screen
                name="Pinmark"
                component={Bookmarks}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <Button
                            title="Settings"
                            onPress={() => navigation.navigate('Settings')}
                            type="clear"
                        />
                    )
                })}
            />

            <MainStack.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
            />
        </MainStack.Navigator>
    </NavigationContainer>
);

export default NavigationRoot;
