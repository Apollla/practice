import { useTheme } from "../../../hooks/useTheme";
import { type ChangeEvent, type FormEvent } from "react";
import { InputView } from "../InputView";

type Props = {
  username: string 
  email: string
  password: string
  confirmedpassword: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: FormEvent) => void
}

export const RegistrationView = ({username, email, password, confirmedpassword, onChange, onSubmit}: Props) => {
  const { theme } = useTheme();
  
  return (
    <div className="w-full flex-1 flex flex-col pt-5">
      <div className="flex flex-col ml-[200px]">
        <button className={`text-sm text-gray-600 hover:underline mb-1 self-start ${theme === "light" ? "text-gray-600" : "text-white"}`} type="button">
          Back to home
        </button>
        <label className="font-bold text-4xl">Sign up</label>
      </div>

      <form onSubmit={onSubmit} className={`w-full max-w-[550px] mx-auto mt-6 pb-5 px-4 flex flex-col gap-4 bg-white/30 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-8 
      ${theme === "light" ? "bg-white text-gray-700" : "bg-gray-800 text-white"}`}>

<label className="font-semibold text-sm">
  Name
<InputView type="text" name="username" placeholder="Name" value={username} onChange={onChange}/>
</label>   

        <label className="font-semibold text-sm ">
          Email
          <InputView type="email" name="email" placeholder="Email" value={email} onChange={onChange}/>
        </label>

        <label className="font-semibold text-sm">
          Password
          <InputView type="password" name="password" placeholder="Password" value={password} onChange={onChange}/>
        </label>

        <label className="font-semibold text-sm">
          Confirm Password
          <InputView type="password" name="confirmedpassword" placeholder="Confirm password" value={confirmedpassword} onChange={onChange}/>
        </label>

        <button type="submit" className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition">
          Sign up
        </button>
      </form>
    </div>
  );
};