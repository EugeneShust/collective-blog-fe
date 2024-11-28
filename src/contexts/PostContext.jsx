// Context API pattern: Provides global state and functions for managing posts.

import { createContext, useState, useEffect } from 'react';

export const PostsContext = createContext(null);

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    function addOrUpdatePost(post) {
        // It is necessary to use the functional form (setState((prev) => {const newState = [...prevState]; return newState}) because:
        //   - It isolates the state updating from external changes.
        //   - It solves the problem of asynchrony Setstate.

        setPosts((prevPosts) => {
            const newPosts = [...prevPosts];
            const index = newPosts.findIndex((el) => el.id === post.id);

            if (index === -1) newPosts.push(post);
            else newPosts[index] = post;

            return newPosts;
        });
    }

    useEffect(() => {
        console.log('Updated posts:', posts); // Лог оновленого стану
    }, [posts]);

    return (
        <PostsContext.Provider value={{ posts, addOrUpdatePost }}>
            {children}
        </PostsContext.Provider>
    );
};
