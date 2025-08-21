import { useEffect, type MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks"
import { fetchPosts, selectPost, updateDislikePost, updateLikePost } from "../../../features/posts/postsSlice";
import {ThumbsUp, ThumbsDown} from 'lucide-react'
import PostPreviewPopup from "./components/PostPreviewPopup";

export const PostsPage = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector(state => state.posts);

  const handleLikeClick = (event: MouseEvent<HTMLButtonElement>, postId: number) => {
    event.stopPropagation();
    dispatch(updateLikePost(postId))
  }

  const handleDislikeClick = (event: MouseEvent<HTMLButtonElement>, postId: number) => {
    event.stopPropagation();
    dispatch(updateDislikePost(postId))
  }

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {posts.length > 0 && posts.map(post => (
        <div onClick={() => dispatch(selectPost(post))} className="border rounded-2xl border-gray-500 p-4 text-xs flex flex-col gap-2 hover:bg-indigo-500 hover:text-white cursor-pointer" key={post.id}>
          <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
          <p className="line-clamp-3">{post.body}</p>
          <div className="flex gap-4 mt-auto">
            <button onClick={(event) => handleLikeClick(event, post.id)} className="flex relative items-center gap-2 ">
              <ThumbsUp className="size-4" />
              {post.reactions.likes}
            </button>
            <button onClick={(event) => handleDislikeClick(event, post.id)} className="flex items-center gap-2">
              <ThumbsDown className="size-4"/>
              {post.reactions.dislikes}
            </button>
          </div>
        </div>
      ))}
      <PostPreviewPopup />
    </div>
  )
}
