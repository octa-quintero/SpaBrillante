const initialState = {
  service: [],
  slots: [],
  confirmedTimeSlots: [],
  loading: false,
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_SERVICE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'GET_SERVICE_SUCCESS':
      return {
        ...state,
        loading: false,
        service: action.payload,
        error: null
      };
    case 'GET_SERVICE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'GET_SLOTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'GET_SLOTS_SUCCESS':
      return {
        ...state,
        loading: false,
        slots: action.payload,
        error: null
      };
    case 'GET_SLOTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'CONFIRM_TIMESLOT':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'CONFIRM_TIMESLOT_SUCCESS':
      const { serviceId, ...confirmedTimeSlot } = action.payload;
      return {
        ...state,
        loading: false,
        confirmedTimeSlots: [...state.confirmedTimeSlots, { ...confirmedTimeSlot, serviceId }],
        error: null
      };
      case 'DELETE_TIMESLOT':
        const updatedConfirmedTimeSlots = state.confirmedTimeSlots.filter(slot => slot.serviceName !== action.payload);
        return {
          ...state,
          confirmedTimeSlots: updatedConfirmedTimeSlots
        };      
    case 'CONFIRM_TIMESLOT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
