import  { useEffect, useState } from 'react'
import { type User } from '../../../types/users'
import { UsersView } from './UsersView'

export const UsersController= () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data as User[])
    }

    fetchUsers()
  }, [])

  return <UsersView users={users} />
}
