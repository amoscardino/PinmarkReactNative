import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import BookmarkList from '../components/BookmarkList';
import { getBookmarks } from '../utils/pinboardApi';

const Bookmarks = ({ navigation }) => {
    const { data: bookmarks, status, error, refetch } = useQuery('bookmarks', getBookmarks);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => refetch());

        return unsubscribe;
    }, [navigation]);

    return <BookmarkList status={status} error={error} bookmarks={bookmarks} />;
};

export default Bookmarks;
