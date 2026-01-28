import type {MediaItem, UserWithNoPassword} from 'hybrid-types/DBTypes';

type MediaItemWithOwner =
  MediaItem & {username: string};
type AuthContextType = {
    user: UserWithNoPassword | null;
    handleLogin: (credentials: Credentials) => void;
    handleLogout: () => void;
    handleAutoLogin: () => void;
};
type Credentials = {
    username: string;
    password: string;
};

export type {MediaItemWithOwner, AuthContextType, Credentials};
