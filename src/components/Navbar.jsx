// Desc: This is the navbar component
import { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import PropTypes from 'prop-types'
import NavLinks from '../helper/NavLinks'
import MenuIcon from '../assets/menu-icon.svg'
import CloseIcon from '../assets/close-icon.svg'

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navbarBackground = isTopOfPage ? 'bg-transparent' : 'bg-red'

  const isAboveSmallScreen = useMediaQuery('(min-width: 768px)')

  const handleIsMenuOpenClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={` ${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className='container mx-auto flex justify-between items-center w-5/6'>
        <h4 className='font-playfair text-3xl font-bold'>KO</h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreen ? (
          <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
            <NavLinks
                navNames={['Home', 'Skills', 'Projects', 'Testimonials', 'Contact']}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
          </div>
        ) : (
          <button
            className='rounded-full border-2 p-2 bg-none w-10 h-10'
            onClick={handleIsMenuOpenClick}
          >
            <img src={MenuIcon} alt='menu-icon' />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreen && isMenuOpen && (
          <div
            className='fixed flex flex-col right-0 bottom-0 h-full bg-blue w-[300px] gap-10 text-2xl'
          >
            {/* CLOSE ICON */}
            <div className='flex justify-end pt-8 pr-8'>
              <button
                className='rounded-full border-2 p-2 bg-none w-10 h-10'
                onClick={handleIsMenuOpenClick}
              >
                <img src={CloseIcon} alt='menu-icon' />
              </button>
            </div>

            {/* MENU LINKS */}
            <div className='flex flex-col gap-10 text-center'>
              <NavLinks
                navNames={['Home', 'Skills', 'Projects', 'Testimonials', 'Contact']}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  selectedPage: PropTypes.string,
  setSelectedPage: PropTypes.func.isRequired,
  isTopOfPage: PropTypes.bool.isRequired,
}

export default Navbar
