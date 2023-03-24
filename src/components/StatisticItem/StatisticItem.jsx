import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

import { IconContext } from 'react-icons';

export const StatisticItem = ({ stat, icon }) => {
  console.log(stat);
  return (
    <StatisticBox>
      <IconContext.Provider value={{ size: '30px' }}>
        {icon}
      </IconContext.Provider>
      <StatisticCounter>{stat.total}</StatisticCounter>
      <StatisticText>{stat.title}</StatisticText>
    </StatisticBox>
  );
};
