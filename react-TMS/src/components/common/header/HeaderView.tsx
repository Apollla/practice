import type {FunctionComponent} from 'react'
import { BurgerMenuView } from './components/BurgerMenuView'
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHooks'
import { toggleTheme } from '../../../features/theme/themeSlice'

type Props = {
  isOpenMenu: boolean,
  onToggleMenu: () => void
}

export const HeaderView: FunctionComponent<Props> = ({isOpenMenu, onToggleMenu}) => {
  const { theme } = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  return (
    <header className='flex justify-between items-center py-2'>
      <div>React Router DOM</div>

      <button className='ml-auto mr-4 cursor-pointer border border-gray-500 px-3 py-1 rounded-2xl' onClick={() => dispatch(toggleTheme())}>
        {theme === 'light' ? '🌞 light' : '🌜 dark'}
      </button>

      <button className='flex flex-col gap-1 cursor-pointer' onClick={onToggleMenu}>
        <span className='w-8 h-1 bg-black'></span>
        <span className='w-8 h-1 bg-black'></span>
        <span className='w-8 h-1 bg-black'></span>
      </button>

      {isOpenMenu && <BurgerMenuView onToggleMenu={onToggleMenu}/>}
    </header>
  )
}
