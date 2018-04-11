import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { tap, map, exhaustMap, switchMap, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import {
  Login,
  LoginSuccess,
  LoginFailure,
  AuthActionTypes,
} from '../actions/auth';
import { User, Authenticate } from '../models/user';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    map((action: Login) => action.payload),
    switchMap((payload: Authenticate) => {
      return this.authService.login(payload).pipe(
        map((user: User) => {
          const myUser: User = {email: user.email};
          return new LoginSuccess({ user: myUser });
      }
      ),
        catchError(error => of(new LoginFailure(error)))
      );
    }));

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => {
      return this.router.navigate(['/home']);
    })
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
    tap(authed => {
      this.router.navigate(['/login']);
    })
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) { }
}
