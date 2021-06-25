import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Loader = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }}>
        <ActivityIndicator size="large" />
        <Text>
            Loading....
        </Text>
    </View>
);

export default Loader;
