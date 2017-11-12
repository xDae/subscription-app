// @flow

export const getService = () => {
  console.log('getServices');
  // return (dispatch, getState) => {
  //   console.log(getState());

    return {
      type: 'GET_SERVICE',
      payload: 'hola',
    };
  // };
};
