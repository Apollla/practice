type Props = {
  onChangeTheme: ()=> void
}
export const Header2 = ({onChangeTheme}:Props) => {
    return <header className="px-10 w-full h-auto bg-blue-500 flex justify-between py-4 items-center-center">
      <button className = 'bg-blue-500 border xs text-white flex justify-between item-center'>burger</button>
      <div className = 'flex gap-1'>
        <button className='bg-blue-500 border-2 rounded-xs text-white flex justify-between item-center'>search</button>
        <button className='bg-blue-500 border-2 rounded-xs text-white flex justify-between item-center'>logIn</button>
        <button className='bg-blue-500 border-2 rounded-xs text-white flex justify-between item-center' onClick={onChangeTheme}>Change Theme</button>
      </div>
    </header>}