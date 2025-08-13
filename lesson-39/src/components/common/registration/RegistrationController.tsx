import { RegistrationView } from "./RegistrationView"
import { useState, type ChangeEvent, type FormEvent } from "react"

export const RegistrationController = () => {
  const [registrationFormData, setRegistrationFormData] = useState({username: '', email: '', password: '', confirmedpassword: ''})

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    
    setRegistrationFormData({ ...registrationFormData, [key]: e.currentTarget.value })
  }

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();

    console.log(registrationFormData)
  }

  return <RegistrationView username={registrationFormData.username} email={registrationFormData.email} password={registrationFormData.password} confirmedpassword={registrationFormData.confirmedpassword} onChange={handleOnChange} onSubmit={handleSubmit}/>
}