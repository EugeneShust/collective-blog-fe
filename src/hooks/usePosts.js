// Custom Hook pattern: Provides shared logic for Posts state and API management.
import { useContext } from 'react';
import { PostsContext } from '../contexts';

export const usePosts = () => useContext(PostsContext);