import {useState} from 'react';
import {type NavigateFunction, useNavigate} from 'react-router';

const Upload = () => {
  const [uploading, setUploading] = useState(false);
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      <h2>Upload</h2>
      <button
        onClick={() => {
          setUploading(true);
          setTimeout(() => {
            setUploading(false);
          }, 3000);
        }}
      >
        Upload
      </button>
      {uploading && <p>Uploading...</p>}
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default Upload;
