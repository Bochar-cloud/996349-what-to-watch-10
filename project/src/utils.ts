import dayjs from 'dayjs';

const normaliseDate = (date: string, place: string): string => dayjs(date).format(place);

// const normalizeFilmDate = (date, placeDate = 'relise-date') => ;

export {normaliseDate};
