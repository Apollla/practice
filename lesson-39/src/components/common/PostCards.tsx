import { PostCardLarge } from "./PostCardLarge";
import { PostCardMedium } from "./PostCardMedium";
import { PostCardSmall } from "./PostCardSmall";
import type { Post } from "../Post";
import { icons } from "../../constants/icons";
import { postLarge, postMedium, postSmall } from "../../constants/posts";

const clonePost = (base: Post, newId: number): Post => ({
  ...base,
  id: newId,
});

const mediums: Post[] = Array.from({ length: 4 }, (_, i) =>
  clonePost(postMedium, 100 + i)
);

const smalls: Post[] = Array.from({ length: 6 }, (_, i) =>
  clonePost(postSmall, 200 + i)
);

export const PostCards = () => (
  <div className="max-w-[1200px] mx-auto gap-6 py-8 px-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-start">
  <div className="flex flex-col gap-6">
    <PostCardLarge post={postLarge} icons={icons} />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {mediums.map((m) => (
        <PostCardMedium key={m.id} post={m} icons={icons} />
      ))}
    </div>
  </div>
  <div className="flex flex-col gap-4 h-full">
    {smalls.map((s) => (
      <div key={s.id} className="flex-1">
        <PostCardSmall post={s} icons={icons} />
      </div>
    ))}
  </div>
</div>
);