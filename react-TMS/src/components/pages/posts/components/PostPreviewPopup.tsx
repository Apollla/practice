import { useDispatch, useSelector } from "react-redux";
import { clearSelectedPost } from "../../../../features/posts/postsSlice";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import {CircleX} from 'lucide-react'

export default function PostPreviewPopup() {
  const dispatch = useAppDispatch();
  const selectedPost = useAppSelector((state) => state.posts.selectedPost);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedPost) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [selectedPost]);

  if (!selectedPost && !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-200 ease-out ${
        selectedPost ? "opacity-100" : "opacity-0"
      }`}
    >
      
      <div
        className={`relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full transform transition-all duration-300 ${
          selectedPost ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <CircleX className="absolute top-2 right-2 cursor-pointer hover:stroke-red-500" onClick={() => dispatch(clearSelectedPost())} size="32" />
        <h2 className="text-xl font-bold dark:text-white">{selectedPost?.title}</h2>
        <p className="mt-4 dark:text-gray-300">{selectedPost?.body}</p>
        
      </div>
    </div>
  );
}
