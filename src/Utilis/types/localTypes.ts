import type {MediaItem} from 'hybrid-types/DBTypes';

type MediaItemWithOwner =
  MediaItem & {username: string};

export type {MediaItemWithOwner};
