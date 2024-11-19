import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components'

export function HomePage() {
// post context
function handleButton() {
    const navigate = useNavigate();
    navigate('/create-post');
}
    return (
        <>
            <div className="flex flex-row align-baseline justify-end">
                <Button
                    onClick={handleButton}
                    buttonLabel={'Create new post'}
                    buttonStyle={
                        'border-2 border-[#CACED5] p-2 rounded-lg bg-[#374151]'
                    }
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
            </div>
        </>
    );
}
