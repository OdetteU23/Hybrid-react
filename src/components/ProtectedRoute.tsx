import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../hooks/ContextHooks';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {

    const location = useLocation();
    const { user } = useUserContext();
    console.log(user);

    // replace and state are used to redirect to origin when page is refreshed

    if (!user) {
        return <Navigate to="/" state={{ from: location.pathname }} replace />;
    }

    return children;
};

export default ProtectedRoute;
