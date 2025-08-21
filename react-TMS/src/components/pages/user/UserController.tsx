import React, { useEffect, useState } from 'react'
import { UserView } from './UserView'
import type { User } from '../../../types/users'
import { useParams } from 'react-router-dom'


export const UserController = () => {
  const [user, setUser] = useState<User | null>(null)
  const { userId } = useParams()
  
    useEffect(() => {
      const fetchUsers = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const data = await response.json()
        setUser(data as User)
      }
  
      fetchUsers()
    }, [])

  if (!user) {
    return <div>Loading...</div>
  }

  return <UserView user={user}  />
}
