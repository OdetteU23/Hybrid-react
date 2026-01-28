import {useState, useEffect} from 'react';
import {fetchData} from '../Utilis/fetch-data';
import type {MediaItem, UserWithNoPassword, MediaItemWithOwner} from 'hybrid-types/DBTypes';


const useMedia = () => {
  // Hook logic here
  const [mediaArray, setMediaArray] = useState<MediaItemWithOwner[]>([]);


  useEffect(() => {
    const getMedia = async () => {
      //const json = await fetchData<MediaItem[]>(import.meta.env.VITE_MEDIA_API + '/media');
      const media = await fetchData<MediaItem[]>(import.meta.env.VITE_MEDIA_API + '/media');
      //setMediaArray(media);
      console.log(media);

      const mediaWithOwners: MediaItemWithOwner[] =
      await Promise.all<MediaItemWithOwner>(media.map(async (item: MediaItem) => {
      try {
        const owner = await fetchData<UserWithNoPassword>(`${import.meta.env.VITE_AUTH_API + '/users/' + item.user_id}`);
        const MediaItemWithOwner: MediaItemWithOwner = {
          ...item,
          username: owner.username,
        };
        return MediaItemWithOwner;
      } catch (error)
      {
        console.error('Error fetching owner for media item:', item.media_id, error);
        return {
          ...item,
          username: 'not found',
        } as MediaItemWithOwner;
      }}));

      setMediaArray(mediaWithOwners);
      console.log(mediaWithOwners);
    };
    getMedia();
    /*
    try
    {
      getMedia();
    } catch (error) {
      console.error('Error fetching media:', error);
    }*/
  }, []);
  return mediaArray;
}

export {useMedia};
