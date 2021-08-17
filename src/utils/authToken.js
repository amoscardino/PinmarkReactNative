import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = 'Pinmark Auth Token';

const getAuthToken = async () => (await AsyncStorage.getItem(STORAGE_KEY)) || '';

const saveAuthToken = async (token) => await AsyncStorage.setItem(STORAGE_KEY, token || '');

export {
    getAuthToken,
    saveAuthToken
};
