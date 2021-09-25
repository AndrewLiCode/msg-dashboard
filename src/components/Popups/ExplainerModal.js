import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { useDashboard } from '../../context';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: '#333333',
    borderRadius: '.5rem',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '4rem',
    maxWidth: '600px',
  },
}));

export default function SimpleModal() {
  const { dispatch, state } = useDashboard();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    dispatch({type: 'IS_RUNNING', payload: !state.isRunning });
  };

  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div className={classes.paper}>
        <h2 id='simple-modal-title'>
          This project displays messages generated every two seconds by a
          server.
        </h2>
        <h5 id='simh5le-modal-description'>Project goals:</h5>
        <ol>
          <li>Display the messages</li>
          <li>
            Filter messages by <code>level</code>
          </li>
          <li>Start/stop messages from the server</li>
          <li>Delete all messages </li>
          <li>Delete individual messages</li>
          <li>Edit messages</li>
          <li>Use pretty colors 🌈</li>
        </ol>
        <h3>Closing this modal will start the server.</h3>
        <Button autoFocus variant='contained' onClick={() => handleClose()}>
          Close
        </Button>
      </div>
    </Modal>
  );
}
