export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_NEW_MESSAGE':
      return {
        ...state,
        allMessages: [...state.allMessages, action.payload],
      };
    case 'DELETE_ALL':
      return { ...state, allMessages: [], msgsInView: [] };
    case 'DELETE_ONE':
      let newMessages = state.allMessages.filter(
        (msg) => msg.id !== action.payload
      );
      return { ...state, allMessages: newMessages };
    case 'IS_RUNNING':
      return { ...state, isRunning: action.payload };
    case 'SET_SNACKBAR':
      return { ...state, snackbar: action.payload };
    case 'SET_SELECT':
      return { ...state, select: action.payload };
    default:
      return;
  }
}
