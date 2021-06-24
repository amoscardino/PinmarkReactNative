import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';

const BookmarkListItem = ({ item }) => {
    const handlePress = async () => {
        await WebBrowser.openBrowserAsync(item.url);
    };

    return (
        <Pressable onPress={handlePress}>
            <Card>
                <Card.Title h4 style={{ textAlign: 'left' }}>
                    {item.title}
                </Card.Title>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>
                        {item.isUnread ? 'Unread' : 'Read'}
                    </Text>

                    <Text>
                        {item.isPublic ? 'Public' : 'Private'}
                    </Text>
                </View>
            </Card>
        </Pressable>
    )
};

export default BookmarkListItem;
