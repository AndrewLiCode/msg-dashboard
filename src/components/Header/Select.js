import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { levels, levelsAll } from '../../store/levels.js';
import { selectStyle } from '../../helpers/useStyles';
import { useDashboard } from '../../context';

function SelectMenu({ inEditView, level, setLevel }) {
  const { dispatch, state } = useDashboard();
  let options, scopedLevel;

  // these two if statements help the select component know what to render if it is in the header menu or within a message component
  if (inEditView) {
    options = levels;
    scopedLevel = level;
  }
  if (!inEditView) {
    options = levelsAll;
    scopedLevel = state.select;
  }

  function handleChange(event) {
    let newLevel = event.target.value;
    if (inEditView) {
      setLevel(newLevel);
    } else {
      dispatch({
        type: 'SET_SNACKBAR',
        payload: `Successfully changed level to ${newLevel}`,
      });
      dispatch({ type: 'SET_SELECT', payload: newLevel });
    }
  }

  return (
    <FormControl variant='outlined'>
      <Select
        labelId='demo-simple-select-outlined-label'
        id='demo-simple-select-outlined'
        style={selectStyle}
        value={scopedLevel}
        onChange={handleChange}
        label='Levels'
      >
        {options.map((level, key) => (
          <MenuItem key={key} value={level}>
            {level}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectMenu;
