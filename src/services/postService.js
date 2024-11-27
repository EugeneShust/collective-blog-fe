// Service Layer: Posts manages API requests for posts.

import { fetchWithAuth } from '../api/index';

// Backend API:
// GET /posts
// Description: Retrieve all posts.
// Response: A JSON array of all posts.
// GET /posts/postId
// Description: Retrieve a single post by ID.
// Response: A JSON object of the post.

// ---------- Begin POST ----------
// POST /posts
// Description: Create a new post.
// Request Body: JSON object with post fields.
// Response: The newly created post as a JSON object.

export async function createBlogpost(post) {
    return await fetchWithAuth('/posts', {
        method: 'POST',
        body: JSON.stringify(post),
    });
}

// ---------- End POST ----------

// PUT /posts/postId
// Description: Update an existing post by ID.
// Request Body: JSON object with post fields.
// Response: The updated post as a JSON object.
// DELETE /posts/postId
// Description: Delete a post by ID.
// Response: A success message or the deleted post as a JSON object.
