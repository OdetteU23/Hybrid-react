import type { MediaItem, MediaItemWithOwner } from "hybrid-types/DBTypes";
import { Link } from "react-router";
//import { useState } from "react";

const MediaRow = (props: { item: MediaItemWithOwner, setSelectedItem: (item: MediaItem | undefined) => void }) => {
  const { item } = props;
  //const [dummyLikes, setDummyLikes] = useState( 0);

  //const dummyLikesState = useState( 0);
  //const dummyLikes = dummyLikesState[0];
  //const setDummyLikes = dummyLikesState[1];


  return (
    <tr key={item.media_id}>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.username}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>

        {/*
        <button onClick={() =>{
          setSelectedItem(item);
        }}> Select to display the image/video
        </button>
        */}

        <Link to="/single" state={{item}}>Show</Link>
      </td>

      {/* <td>Likes {dummyLikes}
        <button onClick={() =>{
          console.log('Add like to ', item.title);
          setDummyLikes (dummyLikes + 1);
        }}> Add like </button>
      </td> */}

    </tr>

  );
}

export default MediaRow;
