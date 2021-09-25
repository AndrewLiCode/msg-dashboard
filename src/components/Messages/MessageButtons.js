import React, { useCallback } from 'react';
import Dialogue from '../Popups/Dialogue';
import style from './Message.module.scss';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDashboard } from '../../context';

function MessageButtons({
  id,
  showDelete,
  setShowDelete,
  editOrView,
  setEditOrView,
  editMode,
  setNewMsg,
}) {
  const { state, dispatch } = useDashboard();

  function firstButtonClicked() {
    if (!editMode) {
      dispatch({ type: 'IS_RUNNING', payload: !state.isRunning });
      setShowDelete(true);
    }
    if (editMode) {
      setNewMsg();
      setEditOrView(!editOrView);
      dispatch({
        type: 'SET_SNACKBAR',
        payload: 'Successfully edited message',
      });
      dispatch({ type: 'IS_RUNNING', payload: !state.isRunning });
    }
  }

  const secondButtonClicked = useCallback(() => {
    dispatch({ type: 'IS_RUNNING', payload: !state.isRunning });
    setEditOrView(!editOrView);
  }, [dispatch, setEditOrView, state.isRunning, editOrView]);

  return (
    <div className={style.buttons}>
      {showDelete && (
        <Dialogue
          showDelete={showDelete}
          setShowDelete={setShowDelete}
          id={id}
        />
      )}
      <Button
        onClick={() => firstButtonClicked()}
        variant='contained'
        color={editMode ? 'primary' : 'secondary'}
        startIcon={!editMode && <DeleteIcon />}
        style={{ marginRight: '1rem' }}
      >
        {editMode ? 'Accept' : 'Delete'}
      </Button>
      <Button
        onClick={() => secondButtonClicked()}
        variant='contained'
        color={editMode ? 'default' : 'primary'}
      >
        {editMode ? 'Cancel' : 'Edit'}
      </Button>
    </div>
  );
}

export default MessageButtons;
