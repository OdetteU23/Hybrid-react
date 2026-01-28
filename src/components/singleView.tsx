import type {MediaItemWithOwner} from '../Utilis/types/localTypes';

const SingleView = (props: {
  item: MediaItemWithOwner;
  setSelectedItem: (item: MediaItemWithOwner | undefined) => void;
}) => {
  const {item, setSelectedItem} = props;
  return (
    <dialog open>
      <h1>Single View</h1>
      <h4>{item.username}</h4>
      <h4>{item.title}</h4>
      {item.media_type.split('/')[0] === 'image' ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video src={item.filename} controls />
      )}

      {/*<p>{item.description}</p>*/}
      <h4>Uploaded {new Date().toLocaleDateString('fi-FI')}</h4>


      <button onClick={() => setSelectedItem(undefined)}>
        <h2> Close </h2>
      </button>
    </dialog>

     // TODO: Add JSX for displaying a mediafile here
    // - use e.g. a <dialog> element for creating a modal
    // - use item prop to render the media item details
    // - use img tag for displaying images
    // - use video tag for displaying videos
  );
};
export default SingleView;
