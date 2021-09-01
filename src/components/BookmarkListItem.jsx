import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { openBrowserAsync } from 'expo-web-browser';
import { ListItem, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    listItemTitle: {
        marginBottom: 6
    },
    listItemSubtitle: {
        color: 'gray'
    }
});

const BookmarkListItemIcon = ({ isUnread, isPublic }) => {
    if (isUnread)
        return <Icon name='glasses' type='ionicon' />;

    if (isPublic)
        return <Icon name='globe' type='ionicon' />;

    return <Icon name='newspaper' type='ionicon' />;
}

const BookmarkListItem = ({ item }) => {
    const handlePress = async () => {
        await openBrowserAsync(item.url);
    };

    return (
        <Pressable onPress={handlePress}>
            <ListItem bottomDivider>
                <BookmarkListItemIcon isUnread={item.isUnread} isPublic={item.isPublic} />

                <ListItem.Content>
                    <ListItem.Title style={styles.listItemTitle}>
                        {item.title}
                    </ListItem.Title>

                    <ListItem.Subtitle style={styles.listItemSubtitle}>
                        {item.dateSaved.toDateString()}
                    </ListItem.Subtitle>
                </ListItem.Content>

                <ListItem.Chevron />
            </ListItem>
        </Pressable>
    )
};

export default BookmarkListItem;
