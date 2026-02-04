import {Route, BrowserRouter as Router, Routes} from 'react-router';
import Layout from './components/Layout';
import Home from './views/Home';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';
import Login from './views/Login';
import Logout from './views/Logout';
import { UserProvider } from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import RenderView from './views/renderView';

const App = () => {
  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <UserProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>} />
              <Route path="/upload" element={
                <ProtectedRoute>
                  <Upload />
                  </ProtectedRoute>} />
              <Route path="/single" element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>} />
              <Route path="/renderView" element={<RenderView/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={
                <ProtectedRoute>
                  <Logout />
                </ProtectedRoute>} />
            </Route>
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
};

export default App;
