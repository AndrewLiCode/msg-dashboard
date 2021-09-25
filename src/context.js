import React, { useContext, createContext, useReducer } from 'react';
import { useInterval } from './helpers/useInterval';
import { randomGenerator } from './store/generator';
import { reducer } from './store/reducer';

const DashboardContext = createContext();

export function useDashboard() {
  return useContext(DashboardContext);
}

const initialState = {
  allMessages: [],
  msgsInView: [],
  isRunning: false,
  snackbar: '',
  select: 'view all',
};

export function DashboardProvider({ children }) {
  let [state, dispatch] = useReducer(reducer, initialState);

  if (state.select !== 'view all') {
    state.msgsInView = state.allMessages.filter(
      (message) => message.level === state.select
    );
  }
  if (state.select === 'view all') {
    state.msgsInView = state.allMessages;
  }

  useInterval(
    () => {
      dispatch({
        type: 'ADD_NEW_MESSAGE',
        payload: randomGenerator(),
      });
    },
    state.isRunning ? 2000 : null
  );

  const value = {
    state,
    dispatch,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
