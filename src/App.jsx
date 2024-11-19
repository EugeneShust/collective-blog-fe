// Main application component. Initializes layout and routing.
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from './components';
import { HomePage, CreatePostPage } from './pages';

const router = createBrowserRouter([
    {
        path: '',
        element: (
                <MainLayout />
        ),
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/create-post',
                element: <CreatePostPage />,
            },
        ],
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
