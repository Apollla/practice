
import type { Post } from "../Post";
import { PostIcons } from "./PostIcons";
import type { IconData } from "../../constants/icons";

type Props = {
  post: Post;
  icons: IconData;
};

export const PostCardSmall = ({ post, icons }: Props) => (
  <div className="relative w-full p-3 bg-white flex flex-col justify-between overflow-hidden h-full">
    <div className="flex gap-2">
      <div className="flex-1">
        <p className="text-xs text-gray-400">{post.date}</p>
        <h2 className="text-sm font-medium line-clamp-2">{post.title}</h2>
      </div>
      {post.image && (
        <div className="w-16 h-16 flex-shrink-0 ml-2">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
    <div className="flex-grow" />
    <PostIcons icons={icons} />
  </div>
);
