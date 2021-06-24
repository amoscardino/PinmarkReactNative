import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import BookmarkListItem from '../components/BookmarkListItem';
import useBookmarks, { BOOKMARKS_STATUS } from '../hooks/useBookmarks';

const Bookmarks = ({ navigation }) => {
    const [bookmarks, status, error, { loadBookmarks }] = useBookmarks();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            await loadBookmarks();
        });

        return unsubscribe;
    }, [navigation]);

    switch (status) {
        case BOOKMARKS_STATUS.loaded:
            return (
                <FlatList
                    data={bookmarks}
                    renderItem={(item) => <BookmarkListItem {...item} />}
                    keyExtractor={(item) => item.url}
                />
            )

        case BOOKMARKS_STATUS.loading:
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }}>
                    <ActivityIndicator size="large" />
                    <Text>
                        Loading....
                    </Text>
                </View>
            );

        case BOOKMARKS_STATUS.notLoaded:
        default:
            if (!error)
                return null;

            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>
                        Error: {error}
                    </Text>
                </View>
            );
    }
};

export default Bookmarks;
