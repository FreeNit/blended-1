import { formatDistanceToNow, format } from 'date-fns';

export const formatedDate = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const changedDate = date => {
  return format(new Date(date), 'Pp');
};
