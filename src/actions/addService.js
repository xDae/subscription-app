// @flow

import { NavigationActions } from 'react-navigation';

export const addService = (id, service) => ({
  type: 'ADD_SERVICE',
  id,
  payload: service,
});

export const removeService = id => {
  return dispatch => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    dispatch(resetAction);

    dispatch({
      type: 'REMOVE_SERVICE',
      id,
    });
  };
};
