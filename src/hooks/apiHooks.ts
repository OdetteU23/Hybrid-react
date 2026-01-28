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

const useAuthentication = () => {
  const postLogin = async (credentials: {username: string; password: string}) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    };
    const loginResult = await fetchData<{token: string; message: string; user: UserWithNoPassword}>(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      options
    );
    return loginResult;
  };

  return {postLogin};
};

const useUser = () => {
  const getUserByToken = async (token: string) => {
    const options = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const userResult = await fetchData<{user: UserWithNoPassword}>(
      import.meta.env.VITE_AUTH_API + '/users/token',
      options
    );
    return userResult;
  };

  return {getUserByToken};
};

export {useMedia, useAuthentication, useUser};
