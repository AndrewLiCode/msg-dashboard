import React, { useState } from 'react';
import style from './FullMenu.module.scss';
import Button from '@material-ui/core/Button';
import PlayPauseIcons from './PlayPauseIcons';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from './Select';
import { useDashboard } from '../../context';
import Dialogue from '../Popups/Dialogue';
import Chart from './Chart';

function FullMenu({ plural, toggleIsRunning }) {
  const { state } = useDashboard();
  const [showDeleteConfirmation, setShowDelete] = useState(false);

  return (
    <div className={style.main}>
      <div className={style.left}>
        {showDeleteConfirmation && (
          <Dialogue
            inMenu={true}
            setShowDelete={setShowDelete}
          />
        )}
        <div className={style.status}>
          <h2>Status: {state.isRunning ? 'Running' : 'Paused'}</h2>
          <PlayPauseIcons toggleIsRunning={toggleIsRunning} />
        </div>
        <Button
          onClick={(e) => setShowDelete(true)}
          variant='contained'
          startIcon={<DeleteIcon />}
          style={{ marginRight: '1rem' }}
          color='secondary'
        >
          Delete all
        </Button>
        <Button onClick={(e) => toggleIsRunning()} variant='contained'>
          {state.isRunning ? 'Pause' : 'Start'}
        </Button>
        <br />
        <p>Filter:</p>
        <Select />
      </div>
      <div className={style.right}>
        <Chart mini={false} />
        <p>
          Displaying {state.msgsInView.length}{' '}
          {state.select !== 'view all' && `of ${state.allMessages.length} total`}{' '}
          {plural}
        </p>
      </div>
    </div>
  );
}

export default FullMenu;
