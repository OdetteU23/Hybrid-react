import type {MediaItem, UserWithNoPassword, User, Like} from 'hybrid-types/DBTypes';

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
type RegisterCredentials = Pick<User, 'username' | 'password' | 'email'>;
type buttonType = React.ButtonHTMLAttributes<HTMLButtonElement> &{
  value: string;
  variant?: 'basic' | 'danger' | 'warning';
}
type LikesType = {
  item: MediaItemWithOwner | undefined;
};
type LikeState = {
  count: number;
  userLike: Like | null;
};

type LikeAction = {
  type: 'setLikeCount' | 'like';
  like?: Like | null;
  count?: number;
};

export type {MediaItemWithOwner, LikeState, LikeAction, AuthContextType, Credentials, RegisterCredentials, buttonType, LikesType};
