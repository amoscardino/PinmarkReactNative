import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import useAuthToken from '../hooks/useAuthToken';

const Settings = ({ navigation }) => {
    const [authToken, { updateAuthToken }] = useAuthToken();
    const [token, setToken] = useState(authToken);

    const handleSave = async () => {
        await updateAuthToken(token || '');
        navigation.goBack();
    };

    const handleClose = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView>
            <View style={{ padding: 16 }}>
                <Text h1>
                    Settings
                </Text>
            </View>

            <View style={{ padding: 16 }}>
                <Text>
                    Pinboard Auth Token
                </Text>

                <Input
                    defaultValue={authToken}
                    onChangeText={value => setToken(value)}
                    autoCompleteType="off"
                    autoCorrect={false}
                    autoCapitalize="none"
                />
            </View>

            <View style={{ padding: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Button title="Close" onPress={handleClose} type="outline" style={{ flexGrow: 1 }} />
                <Button title="Save" onPress={handleSave} style={{ flexGrow: 1 }} />
            </View>
        </SafeAreaView>
    );
};

export default Settings;
