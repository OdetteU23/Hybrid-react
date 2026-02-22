//import React from "react";
import { useEffect, useRef } from "react";
import { useUserContext } from "../hooks/ContextHooks";
import useForm from "../hooks/formHooks";
import { useCommentStore } from "../stores/store";
const Comments = ({mediaId}: {mediaId: number}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { comments, setComments } = useCommentStore();
  const {user} = useUserContext();
  const {postComment, getCommentsByMediaId} = useCommentStore();


  const initValues = {comment_text: ''};
  const addCommentHandler = async () => {
    if (!user) return;
    // eslint-disable-next-line react-hooks/immutability
    console.log('Add a comment:)', inputs.comment_text);
    const token = localStorage.getItem('token');
    if(!user || !token) {
      return;
    }
    const commentResponse = await postComment(
      inputs.comment_text,
      mediaId,
      token,
    );

    if(commentResponse){
      const comments = await getCommentsByMediaId(mediaId);
      if(comments.length > 0) {
        setComments(comments);
      }
    }


    /*addComment({user_id: user?.user_id, comment_text:inputs.comment_text,
    media_id: mediaId, username: user?.username});
    */

  //console.log('Added comments', comments);
   // eslint-disable-next-line react-hooks/immutability
    setInputs(initValues);
  if(inputRef.current) {
    inputRef.current.value = '';
  }
  };

  const {handleInputChange, handleSubmit, inputs, setInputs} = useForm(
    addCommentHandler,
    initValues,
  );

  useEffect(() => {
    const main = async () => {
      const comments = await getCommentsByMediaId(mediaId);
      if(comments.length > 0) {
        setComments(comments);
      }
    };
    main();
  }, [mediaId, getCommentsByMediaId, setComments]);
    return (
        <>
          <h3>Comments</h3>
          {comments.length>0 ? (
            <ul>
              {comments.map((comment) =>
              <li key= {comment.comment_id}> {comment.created_at?.toLocaleString('fi-FI')}{''}
              {comment.username} : {' '}
              {comment.comment_text}</li>
            )}
            </ul>
            ) : (<p>No comments yet</p>)}

          {user && (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-4 flex w-full max-w-2xl flex-col gap-4 rounded-md bg-stone-600 p-6 text-stone-50 shadow"
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold" htmlFor="title">
              Write comment
            </label>
            <input
              className="rounded-md border border-stone-400 bg-stone-700/60 px-3 py-2 text-stone-50 transition outline-none focus:border-stone-200 focus:ring-2 focus:ring-stone-300/40"
              name="comment_text"
              type="text"
              id="comment_text"
              onChange={handleInputChange}
              ref={inputRef}
            />
          </div>
          <button
            className="w-full rounded-md bg-stone-500 px-4 py-2 font-semibold transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            //disabled={inputs.comment_text.length > 3 ? false : true}
          >
            Add comment
          </button>
        </form>
      )}
    </>
  );
};


export default Comments;
