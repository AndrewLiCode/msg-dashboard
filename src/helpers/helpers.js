import moment from 'moment-timezone';
import { customOrange, customGreen, customRed } from '../helpers/useStyles';

function getChipBackground(level) {
  if (level === 'warn') return customOrange;
  if (level === 'status') return customGreen;
  if (level === 'error') return customRed;
}
function getChipColor(level) {
  if (level === 'warn') return 'black';
  if (level === 'status') return 'white';
  if (level === 'error') return 'white';
}

function getAvatar(level) {
  return level.charAt(0).toUpperCase();
}

function getReadableTime(timestamp) {
  return moment(timestamp).format('llll');
}

function getPlural(state) {
  if (state.length === 1) {
    return 'message';
  }
  if (state.length !== 1) {
    return 'messages';
  }
}
export {
  getChipBackground,
  getChipColor,
  getAvatar,
  getReadableTime,
  getPlural,
};
