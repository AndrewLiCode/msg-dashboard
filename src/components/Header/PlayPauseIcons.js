import React from 'react';
import { FaPlay, FaPauseCircle } from 'react-icons/fa';
import { useDashboard } from '../../context';
import style from './PlayPauseIcons.module.scss';

function PlayPauseIcons({ toggleIsRunning }) {
  const { state } = useDashboard();
  return (
    <div className={style.icon}>
      {state.isRunning ? (
        <FaPlay className={style.playIcon} onClick={() => toggleIsRunning()} />
      ) : (
        <FaPauseCircle
          className={style.pauseIcon}
          onClick={() => toggleIsRunning()}
        />
      )}
    </div>
  );
}

export default PlayPauseIcons;
