// Context API pattern: Provides global state and functions for authentication.
import React, { createContext, useState } from 'react';

// Initialize Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const updateProfile = (profileInfo) => {
        setUser(profileInfo);
    };

    const login = (loginInfo) => {
        setUser(loginInfo.user);
        localStorage.setItem('accessToken', JSON.stringify(loginInfo.token));
        console.log("Login successful. token:", loginInfo.token, "user:", loginInfo.user);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('accessToken');
        console.log("Logout successful.");
    };

    return (
        <AuthContext.Provider value={{ user, login, updateProfile, logout }}>
            {children}
        </AuthContext.Provider>
    );
};





