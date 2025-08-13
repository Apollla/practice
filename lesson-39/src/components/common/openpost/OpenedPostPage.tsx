import type { Post } from "../../Post";
import { icons } from "../../../constants/icons";

type Props = {
  post: Post;
};

export const OpenedPostPage = ({ post }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className="max-w-[900px] mx-auto pt-8 px-4">
        <div className="text-sm text-gray-500 mb-2">
          <span className="mr-1">Home</span> / <span className="ml-1">Post title</span>
        </div>
        <h1 className="text-4xl font-bold leading-tight mb-6">{post.title}</h1>
      </div>

      <div className="max-w-[900px] mx-auto px-4">
      <div className="max-w-[900px] mx-auto px-4">
        <div className="flex justify-center">
          <img src={post.image} className="w-1/2 h-auto object-cover"/>
        </div>
        </div>
        <div className="prose max-w-none mb-8">
          <p className="text-sm text-gray-500">{post.date}</p>
          <p>{post.description}</p>
          <p>{post.text}</p>
        </div>
        <div className="flex justify-between items-center mb-12">
          <div className="flex gap-4">
            <button aria-label="like" className="flex items-center gap-1">
              <img src={icons.like} alt="like" className="w-5 h-5" />
            </button>
            <button aria-label="dislike" className="flex items-center gap-1">
              <img src={icons.dislike} alt="dislike" className="w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-1">
              <img src={icons.save} alt="save" className="w-5 h-5" />
              <span>Add to favorites</span>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center border-t pt-6">
          <div className="flex items-start gap-3">

                <button className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-1 text-gray-700">
                    <span className="inline-block rotate-180">➜</span>
                    <span className="font-medium">Prev</span>
                  </div>
                  <div className="text-sm text-gray-600">PrevPostTitle</div>
                </button>
          </div>

          <div className="flex items-start gap-3">
                <button className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1 text-gray-700">
                    <span className="font-medium">Next</span>
                    <span className="inline-block">➜</span>
                  </div>
                  <div className="text-sm text-gray-600">NextPostTitle</div>
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};
