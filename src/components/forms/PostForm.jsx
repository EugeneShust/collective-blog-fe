import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, date, location });
    setTitle('');
    setDate('');
    setLocation('');
  };

  return (
    <></>
  );
};

export default PostForm;