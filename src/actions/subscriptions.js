// @flow

import { NavigationActions } from 'react-navigation';

export const addSubscription = (id, subscriptionData) => ({
  type: 'ADD_SUBSCRIPTION',
  id,
  payload: subscriptionData,
});

export const editSubscription = (id, subscriptionData) => {
  console.log(id, subscriptionData);

  return {
    type: 'EDIT_SUBSCRIPTION',
    // id,
    // payload: subscriptionData,
  };
};

export const removeSubscription = id => {
  return dispatch => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    dispatch(resetAction);

    dispatch({
      type: 'REMOVE_SUBSCRIPTION',
      id,
    });
  };
};

export default { addSubscription, editSubscription, removeSubscription };
