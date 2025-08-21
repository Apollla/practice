import { HeaderController } from '../components/common/header/HeaderController'
import { UsersController } from '../components/pages/users/UsersController'

export const Users = () => {
  return (
    <div className="w-full min-h-screen dark:bg-gray-800 dark:text-white">
    <div className='max-w-[960px] mx-auto'>
      <HeaderController />
      <UsersController />
    </div>
    </div>
  )
}
