// Service Layer: AuthService manages authentication-related API requests.

import { fetchWithoutAuth, fetchWithAuth } from '../api';

async function registerUser(data) {
    return await fetchWithoutAuth('/auth/signup', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}

async function loginUser(data) {
    return await fetchWithoutAuth('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}

async function getProfile() {
    return await fetchWithAuth('/users/profile');
}

async function updateProfile(id, data) {
    return await fetchWithAuth(`/users/profile`, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
}

export { registerUser, loginUser, getProfile, updateProfile };
