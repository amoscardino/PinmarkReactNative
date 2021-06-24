import { useState, useEffect } from 'react';
import useAuthToken from './useAuthToken';

export const BOOKMARKS_STATUS = {
    notLoaded: 'not loaded',
    loading: 'loading',
    loaded: 'loaded'
};

const useBookmarks = () => {
    const [_, { loadAuthToken }] = useAuthToken();
    const [state, setState] = useState({
        bookmarks: [],
        status: BOOKMARKS_STATUS.notLoaded,
        error: ''
    });

    const loadBookmarks = async () => {
        if (state.status === BOOKMARKS_STATUS.loading)
            return;

        setState(prevState => ({ ...prevState, error: '' }));

        const authToken = await loadAuthToken();

        if (!authToken)
            return;

        setState(prevState => ({ ...prevState, status: BOOKMARKS_STATUS.loading }));

        let pinboardUrl = `https://api.pinboard.in/v1/posts/recent?format=json&auth_token=${authToken}`;

        // Uncomment this out to get around CORS issues when running in the browser
        // pinboardUrl = `https://moscardino-cors.azurewebsites.net/api/proxy?url=${encodeURIComponent(pinboardUrl)}`

        try {
            const response = await fetch(pinboardUrl, {
                headers: {
                    'pragma': 'no-cache',
                    'cache-control': 'no-cache'
                }
            });

            const data = await response.json();

            const bookmarks = data.posts
                .map(post => ({
                    url: post.href,
                    // Can't do this! `new URL()` is not implemented...
                    // domain: new URL(post.href).hostname.replace('www.', ''),
                    title: post.description,
                    dateSaved: new Date(post.time),
                    isPublic: post.shared === 'yes',
                    isUnread: post.toread === 'yes'
                }));

            setState(prevState => ({
                ...prevState,
                bookmarks: bookmarks,
                status: BOOKMARKS_STATUS.loaded
            }));
        }
        catch (err) {
            setState(prevState => ({
                ...prevState,
                bookmarks: [],
                status: BOOKMARKS_STATUS.notLoaded,
                error: (Error(err)).message
            }));
        }
    };

    useEffect(() => {
        loadBookmarks();
    }, []);

    return [state.bookmarks, state.status, state.error, { loadBookmarks }];
};

export default useBookmarks;
