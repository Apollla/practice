import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';

export const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return userContext
}
