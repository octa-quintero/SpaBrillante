import { CONFIRM_TIMESLOT, CONFIRM_TIMESLOT_SUCCESS, CONFIRM_TIMESLOT_FAILURE } from './actionTypes';

export const confirmTimeSlot = (timeSlot) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CONFIRM_TIMESLOT });
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(timeSlot);
        }, 1000);
      });
      dispatch({ type: CONFIRM_TIMESLOT_SUCCESS, payload: response });
      console.log('Turno confirmado con éxito:', response);
    } catch (error) {
      dispatch({ type: CONFIRM_TIMESLOT_FAILURE, payload: error.message });
      console.error('Error al confirmar el horario:', error);
    }
  };
};

