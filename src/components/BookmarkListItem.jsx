import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { openBrowserAsync } from 'expo-web-browser';

const styles = StyleSheet.create({
    card: {
        alignItems: 'stretch'
    },
    cardTitle: {
        textAlign: 'left'
    },
    cardBody: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

const BookmarkListItem = ({ item }) => {
    const handlePress = async () => {
        await openBrowserAsync(item.url);
    };

    return (
        <Pressable onPress={handlePress}>
            <Card styles={styles.card}>
                <Card.Title h4 style={styles.cardTitle}>
                    {item.title}
                </Card.Title>

                <View style={styles.cardBody}>
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
