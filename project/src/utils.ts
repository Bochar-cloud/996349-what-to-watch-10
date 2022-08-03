import dayjs from 'dayjs';

const normaliseDate = (date: string, place: string): string => dayjs(date).format(place);

export {normaliseDate};
