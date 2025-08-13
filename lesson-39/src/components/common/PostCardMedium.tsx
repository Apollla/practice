
import type{ Post } from "../Post";
import type { IconData } from "../../constants/icons";
import { PostIcons } from "./PostIcons";

type Props = {
  post: Post;
  icons: IconData;
};


export const PostCardMedium = ({ post, icons }: Props) => (
  <div className="w-72 bg-white overflow-hidden flex flex-col">
    {post.image && (
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-40 object-cover"
      />
    )}
    <div className="p-4 flex flex-col flex-1 justify-between">
      <div>
        <p className="text-xs text-gray-500">{post.date}</p>
        <h2 className="text-sm font-semibold line-clamp-2">{post.title}</h2>
      </div>
      <PostIcons icons={icons} />
    </div>
  </div>
);
