import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { User, Authenticate } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  constructor(private firebaseAuth: AngularFireAuth) {}

  login({ username, password }: Authenticate): Observable<User> {
    const promise = this.firebaseAuth.auth.signInWithEmailAndPassword(username, password);

    const observable = Observable.fromPromise(promise);

    return observable;
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
    return of(true);
  }
}
