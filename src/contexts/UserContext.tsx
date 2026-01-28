// UserContext.tsx
import React, { createContext, useState } from 'react';
import type { UserWithNoPassword } from 'hybrid-types/DBTypes';
import { useAuthentication, useUser } from '../hooks/apiHooks';
import { useNavigate, useLocation } from 'react-router-dom';
import type { AuthContextType, Credentials } from '../Utilis/types/localTypes';

/*Todos:
  - In this exercise we will use context to share the currently logged-in user between components.
      We will use the context to define is the user logged in or not and to show the appropriate links in the navigation and protect necessary routes.
  -  We will use the UserContext.tsx file from the previous example as a starting point, but we will also add functions to the context to handle the
      login and logout functionalities.
*/
const UserContext = createContext<AuthContextType | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserWithNoPassword | null>(null);
    const { postLogin } = useAuthentication();
    const { getUserByToken } = useUser();
    const navigate = useNavigate();

    const location = useLocation();
    // login, logout and autologin functions are here instead of components
    const handleLogin = async (credentials: Credentials) => {
       try {
        const loginResult = await postLogin(credentials);
        localStorage.setItem('token', loginResult.token);
        setUser(loginResult.user);
        // when page is refreshed, the user is redirected to origin (see ProtectedRoute.tsx)
        navigate(location.pathname || '/');
    } catch (e) {
        console.log((e as Error).message);
    }
    };

    const handleLogout = () => {
        try {
            localStorage.removeItem('token');
            setUser(null);
            navigate('/');
        } catch (e) {
            console.log((e as Error).message);
        }
    };

    // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
    const handleAutoLogin = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const userResult = await getUserByToken(token);
                setUser(userResult.user);
            }
        } catch (e) {
            console.log((e as Error).message);
        }
    };

    return (
        <UserContext.Provider value={{ user, handleLogin, handleLogout, handleAutoLogin }}>
            {children}
        </UserContext.Provider>
    );
};
export { UserProvider, UserContext };
