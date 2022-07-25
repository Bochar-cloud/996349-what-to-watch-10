import dayjs from 'dayjs';

const normaliseDate = (date: string): string => dayjs(date).format('MMMM D, YYYY');

export {normaliseDate};
