import type {MediaItem, UserWithNoPassword, User, Like} from 'hybrid-types/DBTypes';
import type { Comment } from "hybrid-types/DBTypes";

type MediaItemWithOwner =
  MediaItem & {username: string};

type AuthContextType = {
    user: UserWithNoPassword | null;
    loading: boolean;
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

type CommentStore = {
   comments: Partial<Comment & {username: string}>[];
   addComment: (comment: Partial<Comment & {username: string}>) => void;
};

export type {MediaItemWithOwner, LikeState, LikeAction, AuthContextType, Credentials, CommentStore, RegisterCredentials, LikesType};
