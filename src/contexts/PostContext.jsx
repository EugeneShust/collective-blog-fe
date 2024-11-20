// Context API pattern: Provides global state and functions for managing posts.

import { createContext, useState } from 'react';
// import { getPosts } from " "

export const PostsContext = createContext(null);

export function PostsContextProvider() {
    const [posts, setPosts] = useState();

    function savePost(post) {
        const found = posts.findIndex((el) => el.id === post.id);
        if ((found = undefined)) {
            const newPosts = [...posts];
            newPosts.push(post);
        }
    }

    savePost();

    return (
        <PostsContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostsContext.Provider>
    );
}
