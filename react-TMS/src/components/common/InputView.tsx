import { type ChangeEvent } from "react"
import { useController } from "react-hook-form"
type Props = {
  value: string | number
  type: "text" | "email" | "password" | "phone"
  name: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
} 

// export const InputView = ({onChange, value, type, name, placeholder}: Props) => {
//   return <input type={type} name={name} placeholder={placeholder} className="border rounded border-gray-500 px-3 py-1" value={value} onChange={onChange}/>
// }

export const InputView = ({onChange, ...props}: Props) => {
  return <input className="border rounded border-gray-500 px-3 py-1 text-black" onChange={onChange} {...props}/>
}