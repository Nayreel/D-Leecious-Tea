import { bagImg, milkteaLogo, searchImg } from '../utils';
import { navLists } from '../data/index.js';

const Navbar = () => {
  return (
    <header className='navbar-container w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='navbar flex w-full'>
            <img src={milkteaLogo} alt='Apple' className='w-6 lg:w-14'/>

            <div className='category flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav, i) => (
                    <div key={i} className='nav-link px-5 text-sm lg:text-2xl cursor-pointer text-gray-300 hover:text-white transition-all'>
                        <a href={nav.link}>{nav.name}</a>
                    </div>
                ))}
            </div>

            <div className='right-content flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <img src={searchImg} alt='search' className='w-5 lg:w-10'/>
                <img src={bagImg} alt='cart' className='w-5 lg:w-10'/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar