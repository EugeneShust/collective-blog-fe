// Contains all application routes.
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './components';
import {
    HomePage,
    CreatePostPage,
    LoginPage,
    SignUpPage,
    ProfilePage,
} from './pages';
import { AuthProvider, PostsProvider } from './contexts';

const router = createBrowserRouter([
    {
        path: '',
        element: (
            <AuthProvider>
                <MainLayout />
            </AuthProvider>
        ),
        children: [
            {
                index: true,
                element: (
                    <PostsProvider>
                        <HomePage />
                    </PostsProvider>
                ),
            },
            {
                path: '/create-post',
                element: <CreatePostPage />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/signup',
                element: <SignUpPage />,
            },
            {
                path: '/profile',
                element: <ProfilePage />,
            },
        ],
    },
]);

const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;
