import { Link } from "react-router-dom"
import { useUserContext } from "../../../../hooks/useUserContext"
import { useRef, type FunctionComponent } from "react"
import { useOnClickOutside } from "../../../../hooks/useOutsideClick"

type Props = {
  onToggleMenu: () => void
}

export const BurgerMenuView:FunctionComponent<Props> = ({ onToggleMenu}) => {
  const { user } = useUserContext();
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, onToggleMenu);

  return (
    <div className="fixed z-50 inset-0 bg-black/70">
      <div ref={menuRef} className="absolute dark:bg-gray-800 flex flex-col justify-center items-center top-0 right-0 bottom-0 w-[400px] bg-white animate-slide-in">
        <button className="absolute flex flex-col top-4 right-4 cursor-pointer" onClick={onToggleMenu}>
          <span className="w-8 h-1 rounded-full bg-black rotate-45 relative top-1"></span>
          <span className="w-8 h-1 rounded-full bg-black -rotate-45"></span>
        </button>
        <nav className='flex flex-col text-xl capitalize gap-4 justify-center items-center '>
          <Link to="/" className='hover:text-blue-500 cursor-pointer'>Home</Link>
          <Link to="/about" className='hover:text-blue-500 cursor-pointer'>About</Link>
          <Link to="/users" className='hover:text-blue-500 cursor-pointer'>Users</Link>
          <Link to="/posts" className='hover:text-blue-500 cursor-pointer'>Posts</Link>
        </nav>
        <div className="text-xl capitalize mt-4 text-center">
          {user ? <span>{user.firstName + ' ' + user.lastName}</span> : <Link to="/login" className='hover:text-blue-500  cursor-pointer'>Login</Link>}
        </div>
      </div>
    </div>
  )
}
