import React, { useState } from 'react';
import style from './MiniMenu.module.scss';
import Button from '@material-ui/core/Button';
import PlayPauseIcons from './PlayPauseIcons';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from './Select';
import { useDashboard } from '../../context';
import Dialogue from '../Popups/Dialogue';
import Chart from './Chart';
import { customGreen, customOrange } from '../../helpers/useStyles';

function MiniMenu({ plural, toggleIsRunning }) {
  const { state } = useDashboard();
  const [showDeleteConfirmation, setShowDelete] = useState(false);

  const orangeBorder = `1px solid ${customOrange}`;
  const greenBorder = `1px solid ${customGreen}`;
  const borderStyle = {
    borderBottom: state.isRunning ? greenBorder : orangeBorder,
  };

  return (
    <div className={style.main} style={borderStyle}>
      <div className={style.left}>
        {showDeleteConfirmation && (
          <Dialogue inMenu={true} setShowDelete={setShowDelete} />
        )}
        <div className={style.status}>
          <h2>💬</h2>
        </div>
        <p>Filter:</p>
        <Select />
        <Button
          onClick={(e) => setShowDelete(true)}
          variant='contained'
          style={{ background: '#AA647B', height: '40px', paddingLeft: '1rem' }}
        >
          <DeleteIcon />
        </Button>
      </div>
      <div className={style.right}>
        <PlayPauseIcons toggleIsRunning={toggleIsRunning} />
        <p>
          {state.msgsInView.length}{' '}
          {state.select !== 'view all' && `of ${state.allMessages.length}`}{' '}
          {plural}
        </p>
        <Chart mini={true} />
      </div>
    </div>
  );
}

export default MiniMenu;
