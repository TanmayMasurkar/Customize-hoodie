const initialState = {
    textElements: [],
};


function textSectionReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TEXT':
        return {
          ...state,
          textElements: [...state.textElements, action.payload],
        };
      default:
        return state;
    }
}

export default textSectionReducer