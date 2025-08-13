import { OpenedPostPage } from "./OpenedPostPage";
import { postLarge, postSmall, postMedium } from "../../../constants/posts";


export const OpenPost = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
     <OpenedPostPage post={postLarge} />
    </div>
  );
};