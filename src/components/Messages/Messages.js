import React from 'react';
import style from './Messages.module.scss';
import MessageCard from './MessageCard';
import { useDashboard } from '../../context';

function Messages() {
  const { state } = useDashboard();

  return (
    <div className={style.main} id='messages'>
      {state.msgsInView.map((msg, key) => (
        <div key={key}>
          <MessageCard msg={msg} />
        </div>
      ))}
    </div>
  );
}

export default Messages;
