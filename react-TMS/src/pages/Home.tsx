import { HeaderController } from '../components/common/header/HeaderController'
import { HomePage } from '../components/pages/home/HomePage'

export const Home = () => {

  return (
    <div className='w-full min-h-screen dark:bg-gray-800 dark:text-white'>
      <div className='max-w-[960px] mx-auto'>
        <HeaderController />
        <HomePage />
      </div>
    </div>
  )
}
