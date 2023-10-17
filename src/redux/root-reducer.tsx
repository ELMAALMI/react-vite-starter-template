import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from './app';

export const rootReducer = combineReducers({
  auth: authReducer,
});
export type RootStateReducer = ReturnType<typeof rootReducer>;
