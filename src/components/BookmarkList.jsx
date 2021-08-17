import React from 'react';
import { FlatList } from 'react-native';
import BookmarkListItem from './BookmarkListItem';
import Loader from './Loader';
import Error from './Error';

const BookmarkList = ({ status, error, bookmarks }) => {
    switch (status) {
        case 'success':
            return (
                <FlatList
                    data={bookmarks}
                    renderItem={(item) => <BookmarkListItem {...item} />}
                    keyExtractor={(item) => item.url}
                />
            );

        case 'loading':
            return <Loader />;

        case 'error':
            return <Error error={error?.message} />;

        default:
            return null;
    }
}

export default BookmarkList;
