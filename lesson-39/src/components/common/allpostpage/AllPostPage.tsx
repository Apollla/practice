import { useState } from "react";
import { PostCardMedium } from "../PostCardMedium";
import { PostCardSmall } from "../PostCardSmall";
import type { Post } from "../../Post";
import { postLarge, postMedium, postSmall } from "../../../constants/posts";
import { icons } from "../../../constants/icons";
import { TABS, Tabs } from "../useTabs";

export const AllPostsPage = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const clonePost = (base: Post, newId: number): Post => ({ ...base, id: newId });
  const mediumPosts: Post[] = Array.from({ length: 6 }, (_, i) =>
    clonePost(postMedium, 10 + i)
  );
  const smallPosts: Post[] = Array.from({ length: 6 }, (_, i) =>
    clonePost(postSmall, 100 + i)
  );

  return (
    <div className="flex-1-screen bg-gray-50">
    <div className="max-w-[1200px] mx-auto pt-8 px-4">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <Tabs activeTab={activeTab} onTabClick={setActiveTab} />
    </div>
      <div className="max-w-[1200px] mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mediumPosts.map((p) => (
                <PostCardMedium key={p.id} post={p} icons={icons} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {smallPosts.map((p) => (
              <div key={p.id} className="flex-1">
                <PostCardSmall post={p} icons={icons} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mt-12 text-sm">
          <button className="flex items-center gap-1 text-gray-700">
            <span className="inline-block rotate-180">➜</span>
            <span>Prev</span>
          </button>
          <div className="flex gap-2">
            <button className="px-3 py-1 font-bold underline">1</button>
            <button className="px-3 py-1 text-gray-600 hover:text-black">2</button>
            <button className="px-3 py-1 text-gray-600 hover:text-black">3</button>
            <span className="px-2">...</span>
            <button className="px-3 py-1 text-gray-600 hover:text-black">8</button>
          </div>
          <button className="flex items-center gap-1 text-gray-700">
            <span>Next</span>
            <span className="inline-block">➜</span>
          </button>
        </div>
      </div>
    </div>
  );
};
