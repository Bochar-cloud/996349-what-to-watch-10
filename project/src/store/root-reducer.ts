import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {dataProcces} from './data-procces/data-procces';
import {userProcess} from './user-procces/user-procces';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcces.reducer,
  [NameSpace.User]: userProcess.reducer,
});
