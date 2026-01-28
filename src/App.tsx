import './App.css'
import Home from './views/Home.tsx';
import Profile from './views/Profile.tsx';
import Upload from './views/Upload.tsx';
import Single from './views/Single.tsx';
import {Routes, Route, BrowserRouter } from 'react-router';
import Layout from './components/Layout.tsx';

const App = () => {

  return (
     <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/single" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App
