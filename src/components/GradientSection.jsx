import PropTypes from 'prop-types'

const LineGradient = ({ width = "w-full" }) => {
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;
};

LineGradient.propTypes = {
 width: PropTypes.string,
};

export default LineGradient;
