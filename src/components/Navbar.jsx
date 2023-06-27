// Desc: This is the navbar component
import { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import PropTypes from 'prop-types'
import NavLinks from '../helper/Links'
import MenuIcon from '../assets/menu-icon.svg'
import CloseIcon from '../assets/close-icon.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";

const navNames = ['Home', 'Skills', 'Projects', 'Testimonials', 'Contact']

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

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
        <h4 className='font-playfair text-3xl font-bold'>K.O</h4>

        {
          isAboveSmallScreen ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img alt="menu-icon" src={MenuIcon} />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {
          !isAboveSmallScreen && isMenuOpen && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <img alt="close-icon" src={CloseIcon} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
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
