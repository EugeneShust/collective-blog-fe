import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
    const navigate = useNavigate();

    const handleFormSubmit = async (formData) => {
        const data = // service function

        console.log('Form submitted:', formData);
        console.log('Created post:', data);
        navigate('/');
    };

    return (
        <div>
            <h1>Create New Post</h1>
            <PostForm onSubmit={handleFormSubmit} />
        </div>
    );
};

export { CreatePostPage };
