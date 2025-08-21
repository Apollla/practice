import { LoginView } from "./LoginView"
import { useUserContext } from "../../hooks/useUserContext"
import { useForm } from 'react-hook-form'
import type { LoginFormData } from "../../types/form";

export const LoginController = () => {
  const { handleSubmit, register, } = useForm<LoginFormData>({
    defaultValues: {
      username: '',
      password: '',
      isAccept: false
    }
  });

  const { login } = useUserContext()

  const handleSubmitForm = (data: LoginFormData) => {
    login(data);
  }

  return <LoginView register={register} onSubmit={handleSubmit} onSubmitForm={handleSubmitForm}/>
}