import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks';
import { getAllPosts } from '../services';
import { BlogPost } from '../components';

export function HomePage() {
    const { posts, addOrUpdatePost } = usePosts();
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            const data = await getAllPosts();
            console.log(data);
            data.forEach((p) => addOrUpdatePost(p));

            console.log('HomePage.getAllPosts', posts);
        };
        getPosts();
    }, []);

    return (
        <div>
            <h1 className="text-3xl">Homepage</h1>
            {posts?.map((post) => (
                <BlogPost key={post.id} data={post} />
            ))}
        </div>
    );
}
