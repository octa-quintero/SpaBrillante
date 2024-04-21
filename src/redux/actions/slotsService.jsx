import data from '../../data/slots.json';

export const getSlots = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'GET_SLOTS_REQUEST' });
      const response = await new Promise(resolve => setTimeout(() => resolve(data), 1000));
      dispatch({ type: 'GET_SLOTS_SUCCESS', payload: response });
    } catch (error) {
      dispatch({ type: 'GET_SLOTS_FAILURE', payload: error.message });
      console.error('Error al obtener los horarios:', error);
    }
  };
};
