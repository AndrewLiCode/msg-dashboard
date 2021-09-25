import { getChipBackground, getChipColor } from './helpers';
import { orange, red, green } from '@material-ui/core/colors';
const customOrange = orange[300];
const customGreen = green[700];
const customRed = red[400];

function customChip(level) {
  return {
    root: {
      backgroundColor: getChipBackground(level),
      color: getChipColor(level),
    },
  };
}

const selectStyle = {
  backgroundColor: 'gainsboro',
  width: '100px',
  marginRight: '1rem',
};

export { customOrange, customGreen, customRed, customChip, selectStyle };
