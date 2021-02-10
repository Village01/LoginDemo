import {ActionReducerMap, createSelector} from '@ngrx/store';
import * as fromUser from './user.reducer';
import * as User from '../_models/user';
import { StoreModule} from '@ngrx/store';
import { from } from 'rxjs';
import { Actions } from '../_actions/userAction';

 
export interface UserState{
    entitie:fromUser.UserState;
}

export const reducers: ActionReducerMap<UserState, Actions> = {
    entitie: fromUser.userReducer
  };
export const getAppLogin = (state:UserState) =>state.entitie;
export const getLogin = createSelector(getAppLogin,(state:fromUser.UserState)=>{
    return state.entities;
})
