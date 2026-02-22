import type {Comment} from 'hybrid-types/DBTypes';
import {create} from 'zustand';
import { fetchData } from '../Utilis/fetch-data';

type CommentStore = {
   comments: Partial<Comment & {username: string}>[];
   setComments: (comments: Partial<Comment & {username: string}>[]) => void;
   addComment: (comment: Partial<Comment & {username: string}>) => void;
   postComment: (comment_text: string, media_id: number, token: string) => Promise<Comment | null>;
   getCommentsByMediaId: (media_id: number) => Promise<(Comment & {username: string})[]>;
};

export const useCommentStore = create<CommentStore>((set) => ({
   comments: [],
   setComments: (comments: Partial<Comment & {username: string}>[]) => set(() => ({comments})),
   postComment: async (comment_text: string, media_id: number, token: string) => {
      const fetchOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({comment_text, media_id}),
      };
      return fetchData<Comment>(
        import.meta.env.VITE_MEDIA_API + '/comments',
        fetchOptions,
      );
   },
   getCommentsByMediaId: async (media_id: number) => {
      const fetchOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      return fetchData<(Comment & {username: string})[]>(
        `${import.meta.env.VITE_MEDIA_API}/comments?media_id=${media_id}`,
        fetchOptions
      );
   },
   addComment: (comment) =>
           set((state) => ({
              comments: [
                 ...state.comments,
                 {
                    comment_id: state.comments.length + 1, // This is a temporary solution
                    ...comment,
                    //comment_text: comment.comment_text,
                    //user_id: comment.user_id,
                    //media_id: comment.media_id,
                    //username: comment.username,
                    created_at: new Date(),
                 },
              ],
           })),
}));
