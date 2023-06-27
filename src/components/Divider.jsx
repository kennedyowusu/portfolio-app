import PropTypes from 'prop-types'

const Divider = ({ width = "w-full" }) => {
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;
};

Divider.propTypes = {
  width: PropTypes.string,
};

export default Divider;
