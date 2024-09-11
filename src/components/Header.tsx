import {  useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import Sidebar from './Sidebar'
import NavList from './NavList';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);



  return (
    <header className=''>
      <div className="container-main flex items-center justify-between">
        <h1 className="h1 cursor-pointer tracking-widest">W.</h1>
        <NavList/>
        <HiMenu
          className="icon cursor-pointer md:hidden"
          onClick={() => setShowMenu(true)}
        />
      </div>
      {showMenu && <Sidebar onShow={() => setShowMenu(false)} />}
    </header>
  )
}

export default Header
