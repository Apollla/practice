import { type UseFormHandleSubmit, type UseFormRegister } from "react-hook-form"
import type { LoginFormData } from "../../types/form"
import { useAppSelector } from "../../hooks/storeHooks"

type Props = {
    onSubmit: UseFormHandleSubmit<LoginFormData>
    register: UseFormRegister<LoginFormData>
    onSubmitForm: (data: LoginFormData) => void
}

export const LoginView = ({ register, onSubmit, onSubmitForm }:Props) => {
  const { theme } = useAppSelector(state => state.theme);
    return (
        <form action="" className="flex w-1200px bg-white flex-col gap-3" onSubmit={onSubmit(onSubmitForm)}>
           <input className="border rounded border-gray-500 px-3 py-1 text-black" {...register('username')} />
            <input className="border rounded border-gray-500 px-3 py-1 text-black" {...register('password')}/>
            <button type="submit" className="bg-indigo-500 capitalize px-3 py-1 rounded text-white cursor-pointer">LogIn</button>
        </form>
    )
}