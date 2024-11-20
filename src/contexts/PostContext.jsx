// Context API pattern: Provides global state and functions for managing posts.

import { createContext, useState } from 'react';

export const PostsContext = createContext(null);

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    function AddOrUpdatePost(post) {
        const newPosts = [...posts];
        const index = posts.findIndex((el) => el.id === post.id);

        if (index === -1) newPosts.push(post);
        else newPosts[index] = post;
    }

    return (
        <PostsContext.Provider value={{ posts, AddOrUpdatePost }}>
            {children}
        </PostsContext.Provider>
    );
};
