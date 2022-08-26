import {browserHistory} from '../../browser-history';
import {Middleware} from 'redux';
import {Reducer} from '../../types/state';

export const redirect: Middleware<unknown, Reducer> = (_store) => (next) => (action) => {
  if (action.type === 'common/redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};
