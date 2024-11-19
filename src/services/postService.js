// Service Layer: Posts manages API requests for posts.

import { fetchWithoutAuth } from '../api/index';

// Backend API:
// GET /posts
// Description: Retrieve all posts.
// Response: A JSON array of all posts.
// GET /posts/postId
// Description: Retrieve a single post by ID.
// Response: A JSON object of the post.
// POST /posts
// Description: Create a new post.
// Request Body: JSON object with post fields.
// Response: The newly created post as a JSON object.
// PUT /posts/postId
// Description: Update an existing post by ID.
// Request Body: JSON object with post fields.
// Response: The updated post as a JSON object.
// DELETE /posts/postId
// Description: Delete a post by ID.
// Response: A success message or the deleted post as a JSON object.