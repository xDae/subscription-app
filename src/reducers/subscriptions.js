// @flow

import omit from 'lodash/omit';

const subscriptions = (state = {}, { type, id, payload }) => {
  switch (type) {
    case 'ADD_SUBSCRIPTION':
      return { ...state, [id]: payload };

    case 'EDIT_SUBSCRIPTION':
      return { ...state, [id]: payload };

    case 'REMOVE_SUBSCRIPTION':
      return omit(state, id);

    default:
      return state;
  }
};

export default subscriptions;
