import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'Pinmark Auth Token';

const useAuthToken = () => {
    const [authToken, setAuthToken] = useState('');

    const loadAuthToken = async () => {
        const value = await AsyncStorage.getItem(STORAGE_KEY);

        setAuthToken(value || '');

        return value || '';
    };

    const updateAuthToken = async (newToken) => {
        await AsyncStorage.setItem(STORAGE_KEY, newToken);

        setAuthToken(newToken);
    };

    useEffect(() => {
        loadAuthToken();
    }, []);

    return [authToken, { loadAuthToken, updateAuthToken }];
};

export default useAuthToken;
