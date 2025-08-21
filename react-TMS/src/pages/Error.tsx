import { Link } from "react-router-dom"

export const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-2">
      Такой страницы не существует

      <Link to="/" className="hover:text-white/100 text-white/80 shadow-2xl rounded-2xl py-2 px-4 bg-blue-500">На главную</Link>
    </div>
  )
}
