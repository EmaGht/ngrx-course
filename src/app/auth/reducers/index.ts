import { createReducer, on } from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions } from '../auth.actions';

export const authFeatureKey = 'auth';

export class AuthState {
  constructor(public user: User) { }
}

export const authReducer = createReducer(

  new AuthState(undefined),
  on(AuthActions.login, (_, action) => {
    return new AuthState(action.user);
  }),
  on(AuthActions.logout, (_, __) => {
    return new AuthState(null);
  })
);