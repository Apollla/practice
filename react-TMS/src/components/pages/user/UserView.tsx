
import type { User } from '../../../types/users'

type Props = {
  user: User
}

export const UserView = ({ user }: Props) => {
  console.log(" ~ UserView ~ user:", user)
  return (
    <div className='grid grid-cols-4 gap-4'>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
      <div>{user.username}</div>
    </div>
  )
}
