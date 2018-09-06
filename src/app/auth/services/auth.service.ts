import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import { Authenticate } from '../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  constructor(private firebaseAuth: AngularFireAuth) {}

  login({ username, password }: Authenticate) {
    const promise = this.firebaseAuth.auth.signInWithEmailAndPassword(username, password);

    const observable = from(promise);

    return observable;
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
    return of(true);
  }
}
