import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { getAuthToken, saveAuthToken } from '../utils/authToken';

const styles = StyleSheet.create({
    view: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    input: {
        paddingHorizontal: 0,
    },
    buttonRow: {
        paddingVertical: 0,
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        paddingHorizontal: 8,
        flexGrow: 1
    }
});

const Settings = ({ navigation }) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const loadToken = async() => {
            const authToken = await getAuthToken();

            setToken(authToken);
        };

        loadToken();
    }, []);

    const handleSave = async () => {
        await saveAuthToken(token);
        navigation.goBack();
    };

    const handleClose = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView>
            <View style={styles.view}>
                <Text h1>
                    Settings
                </Text>
            </View>

            <View style={styles.view}>
                <Input
                    defaultValue={token}
                    onChangeText={value => setToken(value)}
                    autoCompleteType="off"
                    autoCorrect={false}
                    autoCapitalize="none"
                    label="Pinboard Auth Token"
                    containerStyle={styles.input}
                />
            </View>

            <View style={[styles.view, styles.buttonRow]}>
                <Button title="Close" onPress={handleClose} type="outline" containerStyle={styles.button} />
                <Button title="Save" onPress={handleSave} containerStyle={styles.button} />
            </View>
        </SafeAreaView>
    );
};

export default Settings;
