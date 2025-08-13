
import type { Post } from "../Post";
import type { IconData } from "../../constants/icons";

type Props = {
  post: Post;
  icons: IconData;
};

export const PostCardLarge = ({ post, icons }: Props) => (
  <div className="relative flex max-w-4xl bg-white p-6 gap-4">
    <div className="flex flex-col flex-1 pr-56">
      <p className="text-xs text-gray-500 mb-1">{post.date}</p>
      <h2 className="text-2xl font-bold leading-tight mb-3">{post.title}</h2>
      <p className="text-sm text-gray-700 mb-6">{post.description}</p>
      <div className="flex-grow" />
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button aria-label="like" className="flex items-center gap-1">
            <img src={icons.like} alt="like" className="w-5 h-5" />
          </button>
          <button aria-label="dislike" className="flex items-center gap-1">
            <img src={icons.dislike} alt="dislike" className="w-5 h-5" />
          </button>
        </div>
        <div className="flex gap-3">
          <button aria-label="save" className="flex items-center gap-1">
            <img src={icons.save} alt="save" className="w-5 h-5" />
          </button>
          <button aria-label="more" className="flex items-center gap-1">
            <img src={icons.more} alt="more" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    {post.image && (
      <div className="absolute top-6 right-6 w-48 h-48 flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
    )}
  </div>
);