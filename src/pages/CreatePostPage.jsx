import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogpostForm } from '../components/forms/blogpostForm.jsx';
import { createBlogpost } from '../services/postService.js';
// Import here post -context.
import { usePosts } from '../hooks/usePosts.js';
import { PostsContext } from '../contexts/PostContext.jsx';

const CreatePostPage = () => {
    // Initialize post -context here.
    const { posts, addOrUpdatePost } = usePosts();

    const navigate = useNavigate();

    const handleFormSubmit = async (post) => {
        console.log('Form pass data to parent:', post);

        const data = await createBlogpost(post);

        console.log('Created post:', data);

        //Cause the necessary function of post-context.
        addOrUpdatePost(post);
        navigate('/');
        // END!
    };

    return (
        <div>
            <div className="divider my-8">
                <h1 className="text-3xl">Create a new Post</h1>
            </div>
            {/* Child component of CreatePostPage */}
            <BlogpostForm onSubmit={handleFormSubmit} />{' '}
            <div className="divider my-8"></div>
        </div>
    );
};

export { CreatePostPage };
