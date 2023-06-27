import AnchorLink from 'react-anchor-link-smooth-scroll'
import PropTypes from 'prop-types'

const NavLinks = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase()

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-yellow' : ''
      }
    hover:text-yellow transition duration-300 ease-in-out`}
      href={`#${lowerCasePage}
  `}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

NavLinks.propTypes = {
  page: PropTypes.string.isRequired,
  selectedPage: PropTypes.string,
  setSelectedPage: PropTypes.func.isRequired,
}

export default NavLinks
