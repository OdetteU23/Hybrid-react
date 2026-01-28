//import type {MediaItem, UserWithNoPassword} from 'hybrid-types/DBTypes';
import {useState} from 'react';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/singleView';
import {useMedia} from '../hooks/apiHooks';
import type { MediaItem, MediaItemWithOwner } from 'hybrid-types/DBTypes';

const Home = () => {
  const mediaArray = useMedia();
  const [selectedItem, setSelectedItem] = useState<MediaItemWithOwner | undefined>(undefined);
  return (
    <>
      {/* Debug
       <p>Selected item: {selectedItem?.title}</p> */}
      {selectedItem && (
        <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      )}
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
          <MediaRow
            key={item.media_id}
            item={item}
            setSelectedItem={setSelectedItem as
              (item: MediaItem | undefined) => void}
          />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
