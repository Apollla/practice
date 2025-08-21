import { HeaderController } from '../components/common/header/HeaderController'
import { PostsPage } from '../components/pages/posts/PostsPage'

export const Posts = () => {
  return (
      <div className='w-full min-h-screen dark:bg-gray-800 dark:text-white'>
        <div className='max-w-[960px] mx-auto'>
          <HeaderController />
          <PostsPage />
        </div>
      </div>
    )
}
