import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useDashboard } from '../../context';

export default function SimpleSnackbar() {
  const { state, dispatch } = useDashboard();

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: 'SET_SNACKBAR', payload: '' });
  }

  return (
    <>
      {state.snackbar && (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={Boolean(state.snackbar)}
          autoHideDuration={4000}
          onClose={handleClose}
          message={state.snackbar}
          severity='success'
          action={
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={handleClose}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          }
        />
      )}
    </>
  );
}
