import {type NavigateFunction, useNavigate} from 'react-router';
import type {MediaItem} from 'hybrid-types/DBTypes';
import { useLocation } from 'react-router-dom';

const Single = () =>  {
  const navigate: NavigateFunction = useNavigate();
  const {state} = useLocation();
  const item: MediaItem = state.item;
  return (
    <dialog open>
      <h1>Single View</h1>
      <h4>{item.title}</h4>
      {item.media_type.split('/')[0] === 'image' ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video src={item.filename} controls />
      )}

      {/*<p>{item.description}</p>*/}
      <h4>Uploaded {new Date(item.created_at).toLocaleDateString('fi-FI')}</h4>

      {
      /*<button onClick={() => {}}>
        <h2> Close </h2>
      </button>
      */
      }

      <button onClick={() => navigate(-1)}>Go back</button>
    </dialog>
  );
};
export default Single;
