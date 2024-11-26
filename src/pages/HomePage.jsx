import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components';

export function HomePage() {
    const navigate = useNavigate();
    // post context
    function handleButton() {
        navigate('/');
    }

    return (
        <>
            <h1 className="text-3xl">Homepage</h1>
        </>
    );
}
