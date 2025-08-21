import React from 'react'
import type { User } from '../../../types/users'
import { Link } from 'react-router-dom'

type Props = {
  users: User[] 
}

export const UsersView = ({users}: Props) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {users.map(user => (
        <Link to={`/users/${user.id}`} className='cursor-pointer transition-all scale-95 hover:scale-100 border border-gray-500 p-4 rounded' key={user.id}>
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div>{user.phone}</div>
          <div>{user.username}</div>
        </Link>
      ))}
    </div>
  )
}
