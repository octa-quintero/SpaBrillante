import { DELETE_TIMESLOT_SUCCESS, DELETE_TIMESLOT_FAILURE } from './actionTypes';

export const deleteTimeSlot = (serviceName) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'DELETE_TIMESLOT', payload: serviceName });
    } catch (error) {
      dispatch({ type: DELETE_TIMESLOT_FAILURE, payload: error.message });
      console.error('Error al eliminar el horario:', error);
    }
  };
};

