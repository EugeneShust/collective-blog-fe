import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogpostForm } from '../components/forms/blogpostForm.jsx';
import { createBlogpost } from '../services/postService.js';
    // Import here post -context.

const CreatePostPage = () => {
    // Initialize post -context here.
    const navigate = useNavigate();

    const handleFormSubmit = async (post) => {
        console.log('Form pass data to parent:', post);

        const data = createBlogpost(post);
        
        console.log('Created post:', data);
        
        //Cause the necessary function of post-context.
        
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
