# Fullstack Blog

Welcome to your first fullstack project! 🎉 This application will allow you to create, read, update, and delete blog posts while managing both the backend and frontend development. 🚀

---

## Overview

**Duration**:  
- Full Time: ⏳ 5 days  
- Part Time: ⏳ 10 days  

**Topic Options**:  
The default theme is a *Travel Blog*, but feel free to explore your creativity with a sports blog, photo blog, Dungeons & Dragons, Warhammer, or any topic of your choice.

---

## Features

### Frontend
- **Framework**: React (built with Vite)
- **Navigation**: React Router
- **Pages**:
  - **Homepage**: Displays a list of blog posts with title, image, and snippet.
  - **Create Post Page**: A form to add a new post.
  - **Post Details Page**: Shows full details of a post with options to delete or update it.

### Backend
- **Framework**: Node.js with `http` module
- **Database**: PostgreSQL
- **Endpoints**:
  - `GET /posts`: Fetch all posts.
  - `GET /posts/:id`: Fetch a single post by ID.
  - `POST /posts`: Create a new post.
  - `PUT /posts/:id`: Update a post by ID.
  - `DELETE /posts/:id`: Delete a post by ID.

---

## Setup Instructions

### Database
1. Create a PostgreSQL database locally or on [Neon](https://neon.tech).
2. Define a `posts` table with these fields:
   - `id`: Auto-incrementing primary key.
   - `author`: (Optional) Author's name.
   - `title`: Required text field for the post's title.
   - `content`: Required text field for the post's content.
   - `cover`: Required text field for the image cover.
   - `date`: Defaults to the creation timestamp.

### Frontend
1. Create a React app using Vite:
   ```bash
   npm create vite@latest
