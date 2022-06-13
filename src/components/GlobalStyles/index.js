import './GlobalStyles.scss';
import PropTypes from 'prop-types';
// import React from 'react';
function GlobalStyles({ children }) {
  return children;
}
// function GlobalStyles({ children }) {
//   return React.Children.only(children); // chi nhan 1 chilrent
// }
GlobalStyles.prototype = {
  children: PropTypes.node.isRequired,
};
export default GlobalStyles;
