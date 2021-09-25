import React, { useState } from 'react';
import style from './EditMessage.module.scss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import MessageButtons from './MessageButtons';
import Select from '../Header/Select';
import { getAvatar, getReadableTime } from '../../helpers/helpers';
import { useDashboard } from '../../context';
import { customChip } from '../../helpers/useStyles';
import { withStyles } from '@material-ui/core/styles';

function EditMessage({
  msg,
  editOrView,
  setEditOrView,
  setNewText,
  level,
  setLevel,
}) {
  const { dispatch } = useDashboard();
  const [text, setText] = useState(msg.message);
  const StyleChip = withStyles(customChip(level))(Chip);

  function setNewMsg() {
    setNewText(text);
    dispatch({ type: 'IS_RUNNING', payload: true });
  }

  return (
    <form className={style.editMessage} id={msg.id} onSubmit={setNewMsg}>
      <h3>Edit details:</h3>
      <p>Created: {getReadableTime(msg.timestamp)}</p>
      <StyleChip label={level} avatar={<Avatar>{getAvatar(level)}</Avatar>} />
      <br />
      <h4>Edit level:</h4>
      <Select
        inEditView={true}
        id={msg.id}
        level={level}
        setLevel={setLevel}
      />
      <br />
      <h4>Edit message:</h4>
      <br />
      <textarea
        name=''
        id=''
        cols='100'
        rows='3'
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <MessageButtons
        id={msg.id}
        editMode={true}
        setNewMsg={setNewMsg}
        editOrView={editOrView}
        setEditOrView={setEditOrView}
      />
    </form>
  );
}

export default EditMessage;
