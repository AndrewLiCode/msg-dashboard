import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import style from './Chart.module.scss';
import { useDashboard } from '../../context';
import { customOrange, customGreen, customRed } from '../../helpers/useStyles';

function Chart({ mini }) {
  const { state } = useDashboard();
  const warn = state.allMessages.filter((msg) => msg.level === 'warn');
  const error = state.allMessages.filter((msg) => msg.level === 'error');
  const status = state.allMessages.filter((msg) => msg.level === 'status');
  const wPercent = warn.length / state.allMessages.length || 0;
  const ePercent = error.length / state.allMessages.length || 0;
  const sPercent = status.length / state.allMessages.length || 0;

  return (
    <PieChart
      className={mini ? style.small : style.big}
      data={[
        { title: 'warn', value: wPercent, color: customOrange },
        { title: 'error', value: ePercent, color: customRed },
        { title: 'status', value: sPercent, color: customGreen },
      ]}
    />
  );
}

export default Chart;
