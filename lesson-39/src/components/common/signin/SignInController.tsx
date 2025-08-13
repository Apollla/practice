import { SignInView } from "./SignInView"
import { useState, type ChangeEvent, type FormEvent } from "react"

export const SignInController = () => {
  const [signInFormData, setSignInFormData] = useState({email: '', password: ''})

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      const key = e.currentTarget.name;
      
      setSignInFormData({ ...signInFormData, [key]: e.currentTarget.value })
    }
  
    const handleSubmit = (e:FormEvent) => {
      e.preventDefault();
  
      console.log(signInFormData)
    }
  
    return <SignInView email={signInFormData.email} password={signInFormData.password} onChange={handleOnChange} onSubmit={handleSubmit}/>
  return
}