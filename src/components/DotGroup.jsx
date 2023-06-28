import AnchorLink from "react-anchor-link-smooth-scroll"
import PropTypes from "prop-types"

const DotGroup = ({ selectedPage, setSelectedPage }) => {

  const navNames = ["Home", "Skills", "Projects", "Testimonials", "Contact"];

  const selectedStyle = `relative bg-yellow before:absolute before:w-6 before:h-6 before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%] before:rounded-full`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {
      navNames.map((page, index) => (
          <AnchorLink key={index}
            className={`${
            selectedPage ===
            page.toLowerCase()
              ? selectedStyle : 'bg-grey'}
              w-3 h-3 rounded-full hover:bg-yellow transition duration-300 ease-in-out`
          }
        href=
          {`#${page.toLowerCase()}`}
            onClick={() => setSelectedPage(page.toLowerCase())}
          />
        ))
      }
    </div>
  )
}

DotGroup.propTypes = {
  selectedPage: PropTypes.string,
  setSelectedPage: PropTypes.func.isRequired,
}


export default DotGroup
