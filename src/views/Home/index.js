// import React, { Component } from 'react';
// // import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from './Home';

const mapStateToProps = ({ services, subscriptions }, ownprops) => {
  return {
    services,
    subscriptions,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     removeService: id => {
//       dispatch(removeService(id));
//     },
//   };
// };

export default connect(mapStateToProps)(Home);
