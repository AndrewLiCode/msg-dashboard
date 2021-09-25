import React, { useState } from 'react';
import ViewMessage from './ViewMessage';
import EditMessage from './EditMessage';

export default function MessageCard({ msg }) {
  const [editOrView, setEditOrView] = useState(msg.edit);
  const [text, setText] = useState(msg.message);
  const [level, setLevel] = useState(msg.level);

  return (
    <div>
      {!editOrView ? (
        <ViewMessage
          msg={msg}
          text={text}
          setEditOrView={setEditOrView}
          editOrView={editOrView}
        />
      ) : (
        <EditMessage
          msg={msg}
          editOrView={editOrView}
          setEditOrView={setEditOrView}
          setNewText={setText}
          setLevel={setLevel}
          level={level}
        />
      )}
    </div>
  );
}
