import { type ChangeEvent, type FormEvent } from "react";
import { InputView } from "../InputView";

type Props = {
  email: string
  password: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSubmit: (e: FormEvent) => void
}

export const SignInView = ({email, password, onChange, onSubmit}: Props) => {
  return (
    <div className="w-full flex flex-col pt-8">
    
      <div className="flex flex-col ml-[200px]">
        <button className="text-sm text-gray-600 hover:underline mb-1 self-start" type="button" onClick={() => {}}>
          Back to home
        </button>
        <label className="font-bold text-4xl">Sign in</label>
      </div>

      <div className="w-full flex justify-center px-4 mt-6">
        <form onSubmit={onSubmit} className="w-full max-w-[550px] flex flex-col gap-5 bg-white shadow-md rounded-2xl p-8">
          <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm text-gray-700">
          Email
          <InputView type="email" name="email" placeholder="Email" value={email} onChange={onChange}/>
        </label>
          </div>

          <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm text-gray-700">
          Password
          <InputView type="password" name="password" placeholder="Password" value={password} onChange={onChange}/>
        </label>
          </div>

          <div className="flex justify-start text-sm">
            <button type="button" className="text-blue-600 hover:underline p-0">
              Forgot password?
            </button>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition">
            Sign up
          </button>
          <div className="text-center text-xs text-gray-500">
            Already have an account?
            <button type="button" className="text-blue-600 hover:underline p-0 pl-2">
                 Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
