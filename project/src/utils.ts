import dayjs from 'dayjs';
import {AuthorizationStatus} from './const';

const normaliseDate = (date: string, place: string): string => dayjs(date).format(place);

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export {normaliseDate};
