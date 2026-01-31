import type {MediaItem, UserWithNoPassword, User} from 'hybrid-types/DBTypes';

type MediaItemWithOwner =
  MediaItem & {username: string};
type AuthContextType = {
    user: UserWithNoPassword | null;
    handleLogin: (credentials: Credentials) => void;
    handleLogout: () => void;
    handleAutoLogin: () => void;
};

/*type Credentials =  {
    username: string;
    password: string;
};
*/
type Credentials = Pick<User, 'username' | 'password'>;

export type {MediaItemWithOwner, AuthContextType, Credentials};
