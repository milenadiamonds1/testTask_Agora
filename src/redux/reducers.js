const initialState = {
    selectedPhoto: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_PHOTO':
        return { ...state, selectedPhoto: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  