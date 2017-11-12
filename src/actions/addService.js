// @flow

export const addService = (id, service) => ({
  type: 'ADD_SERVICE',
  id,
  payload: service,
});

export const removeService = id => {
  console.log('hola!', id);

  return {
    type: 'REMOVE_SERVICE',
    id,
  };
};
