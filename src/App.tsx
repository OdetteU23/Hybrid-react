import './App.css'
import Home from './components/Home.tsx';
import MediaRow from './components/MediaRow.tsx';


const App = () => {
  return (
    <>
      <Home/>
      <MediaRow item={{
        media_id: 0,
        user_id: 0,
        filename: '',
        thumbnail: '',
        filesize: 0,
        media_type: '',
        title: '',
        description: null,
        created_at: '',
        screenshots: null
      }}/>
    </>
  );
};

export default App
