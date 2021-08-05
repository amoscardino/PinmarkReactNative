import React from 'react';
import { FlatList } from 'react-native';
import { BOOKMARKS_STATUS } from '../hooks/useBookmarks';
import BookmarkListItem from './BookmarkListItem';
import Loader from './Loader';
import Error from './Error';

const BookmarkList = ({ status, error, bookmarks }) => {

    switch (status) {
        case BOOKMARKS_STATUS.loaded:
            return (
                <FlatList
                    data={bookmarks}
                    renderItem={(item) => <BookmarkListItem {...item} />}
                    keyExtractor={(item) => item.url}
                />
            );

        case BOOKMARKS_STATUS.loading:
            return <Loader />;

        case BOOKMARKS_STATUS.notLoaded:
        default:
            if (!error)
                return null;

            return <Error error={error} />;
    }
}
export default BookmarkList;
