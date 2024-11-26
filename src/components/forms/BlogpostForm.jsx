import React, { useState } from 'react';

export const BlogpostForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, imageUrl, content });
        setTitle('');
        setImageUrl('');
        setContent('');
    };

    return (
        <>
            <div className="max-w-3xl mx-auto">
                <form className="flex flex-col gap-4">
                    <div className="flex flex-row gap-12">
                        <label className="form-control w-full max-w-80">
                            <div className="label">
                                <span className="label-text text-2xl">
                                    Title
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="The title of your post"
                                className="input input-bordered w-full max-w-80"
                                required
                            />
                            <div className="label"></div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-2xl">
                                    Image URL
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Link your image here"
                                className="input input-bordered w-full max-w-xs"
                                required
                            />
                            <div className="label"></div>
                        </label>
                    </div>
                    <label className="form-control max-w-3xl">
                        <div className="label">
                            <span className="label-text text-2xl">Content</span>
                        </div>
                        <textarea
                            className="textarea textarea-bordered h-36"
                            placeholder="Type your blogpost here"
                            required
                        ></textarea>
                        <div className="label"></div>
                    </label>
                    <div className="flex flex-row-reverse">
                        <button
                            className="btn btn-success"
                            onClick={handleSubmit}
                        >
                            Save blogpost
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
