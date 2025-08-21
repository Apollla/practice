import { useState } from 'react';
import { HeaderView } from './HeaderView'

export const HeaderController = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return <HeaderView isOpenMenu={isOpenMenu} onToggleMenu={handleToggleMenu} />
}
