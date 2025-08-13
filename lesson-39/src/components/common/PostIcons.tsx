import type { IconData } from "../../constants/icons";

type Props = {
  icons: IconData;
};

export const PostIcons = ({ icons }: Props) => (
  <div className="mt-2 flex justify-between items-center text-gray-500 text-xs">
    <div className="flex gap-2 items-center">
      <button aria-label="like" className="flex items-center gap-1">
        <img src={icons.like} alt="like" className="w-4 h-4" />
      </button>
      <button aria-label="dislike" className="flex items-center gap-1">
        <img src={icons.dislike} alt="dislike" className="w-4 h-4" />
      </button>
    </div>
    <div className="flex gap-2 items-center">
      <button aria-label="save" className="flex items-center gap-1">
        <img src={icons.save} alt="save" className="w-4 h-4" />
      </button>
      <button aria-label="more" className="flex items-center gap-1">
        <img src={icons.more} alt="more" className="w-4 h-4" />
      </button>
    </div>
  </div>
);
