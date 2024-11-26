import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogpostForm } from '../components/forms/blogpostForm.jsx';

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
            <div className="divider my-8">
                <h1 className="text-3xl">Create a new Post</h1>
            </div>
            <BlogpostForm onSubmit={handleFormSubmit} />
            <div className="divider my-8"></div>
        </div>
    );
};

export { CreatePostPage };
