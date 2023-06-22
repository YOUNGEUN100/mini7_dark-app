import React, { useContext } from 'react'
import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';
import {Context} from '../Context';

function Header() {
  const {darkmode,setDarkmode,handleDarkmode} = useContext(Context);

  return (
    <header>
      <h1>Header</h1>
      {darkmode ? <button onClick={handleDarkmode} className='btn'>light mode <BsSun className='icon'/></button>
                : <button onClick={handleDarkmode} className='btn'>dark mode <FiMoon className='icon'/></button>}
    </header>
  )
}

export default Header