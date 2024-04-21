import data from '../../data/service.json';

export const getService = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'GET_SERVICE_REQUEST' });
      const response = await new Promise(resolve => setTimeout(() => resolve(data), 1000));
      dispatch({ type: 'GET_SERVICE_SUCCESS', payload: response });
    } catch (error) {
      dispatch({ type: 'GET_SERVICE_FAILURE', payload: error.message });
      console.error('Error al obtener el servicio:', error);
    }
  };
};


