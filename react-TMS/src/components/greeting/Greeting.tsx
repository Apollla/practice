import { useUserContext } from '../../hooks/useUserContext'
import { LoginController } from '../login/LoginController';

export const Greeting = () => {
  const { user } = useUserContext();

  if (!user) {
    return <LoginController />
  }

  return (
    <div>Greeting {user.firstName + ' ' + user.lastName}</div>
  )
}
