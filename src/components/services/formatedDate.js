import { formatDistanceToNow } from 'date-fns';

export const formatedDate = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
