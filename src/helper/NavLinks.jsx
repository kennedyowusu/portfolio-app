import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

const NavLinks = ({ navNames, selectedPage, setSelectedPage }) => {
  return (
    <>
      {navNames.map((page, index) => {
        const lowerCasePage = page.toLowerCase();

        return (
          <AnchorLink
            key={index}
            className={`${
              selectedPage === lowerCasePage ? 'text-yellow' : ''
            } hover:text-yellow transition duration-300 ease-in-out`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
          >
            {page}
          </AnchorLink>
        );
      })}
    </>
  );
};

NavLinks.propTypes = {
  navNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedPage: PropTypes.string,
  setSelectedPage: PropTypes.func.isRequired,
};

export default NavLinks;
