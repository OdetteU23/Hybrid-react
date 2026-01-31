import './App.css'
import Home from './views/Home.tsx';
import Profile from './views/Profile.tsx';
import Upload from './views/Upload.tsx';
import Single from './views/Single.tsx';
import { UserProvider } from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import {Routes, Route, BrowserRouter } from 'react-router';
import Layout from './components/Layout.tsx';
import Login from './components/LoginForm.tsx';
import Logout from './views/Logout.tsx';

const App = () => {

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <UserProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/single" element={<Single />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/upload"
              element={
                <ProtectedRoute>
                  <Upload />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App
