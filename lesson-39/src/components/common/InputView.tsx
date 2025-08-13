import { type ChangeEvent } from "react"
type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  value: string | number
  type: "text" | "email" | "password" | "phone"
  name: string
  placeholder: string
} 

export const InputView = ({onChange, ...props}: Props) => {
  return <input className="w-full mt-1 bg-gray-100 text-gray-700 rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={onChange} {...props}/>
}