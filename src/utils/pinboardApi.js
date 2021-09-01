import { getAuthToken } from "../utils/authToken";

export const getBookmarks = async () => {
    const authToken = await getAuthToken();

    if (!authToken.length)
        throw new Error("Missing pinboard auth token!");

    let pinboardUrl = `https://api.pinboard.in/v1/posts/recent?format=json&auth_token=${authToken}`;

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

    return bookmarks;
};
