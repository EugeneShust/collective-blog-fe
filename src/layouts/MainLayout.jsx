import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';
import { useAuth } from '../hooks';
import { getToken } from '../utils';
import { useEffect } from 'react';
import { getProfile } from '../services';

export const MainLayout = () => {
    const { updateProfile, logout } = useAuth();

    useEffect(() => {
        const getData = async () => {
            try {
                console.log('step1');
                const token = getToken();
                console.log(token);
                if (token.length === 0) return;

                const data = await getProfile();
                console.log('MainLayout.fetchProfile', data);
                updateProfile(data);
            } catch (err) {
                logout();
                console.error(err);
            }
        };

        getData();

        return () => {
            console.log('Cleanup function ran');
        };
    }, []);

    return (
        <>
            <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto">
                <Header />
                <main className="flex-grow container mx-auto">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};
