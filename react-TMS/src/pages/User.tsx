import { HeaderController } from '../components/common/header/HeaderController'
import { UserController } from '../components/pages/user/UserController'

export const User = () => {
  return (
    <div className="w-full min-h-screen dark:bg-gray-800 dark:text-white">
    <div className='max-w-[960px] mx-auto'>
      <HeaderController />
      <UserController />
    </div>
    </div>
  )
}
