import React, { useEffect } from 'react';
import BookmarkList from '../components/BookmarkList';
import Loader from '../components/Loader';
import Error from '../components/Error';
import useBookmarks, { BOOKMARKS_STATUS } from '../hooks/useBookmarks';

const Bookmarks = ({ navigation }) => {
    const [bookmarks, status, error, { loadBookmarks }] = useBookmarks();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            await loadBookmarks();
        });

        return unsubscribe;
    }, [navigation]);

    return <BookmarkList status={status} error={error} bookmarks={bookmarks} />;
};

export default Bookmarks;
