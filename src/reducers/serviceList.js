import omit from 'lodash/omit';

const serviceList = (state = {}, { type, id, payload }) => {
  switch (type) {
    case 'ADD_SERVICE':
      return { ...state, [id]: payload };
    // case 'EDIT_SERVICE':
    //   return { ...state, payload };
    case 'REMOVE_SERVICE':
      return omit(state, id);
    default:
      return state;
  }
};

export default serviceList;
