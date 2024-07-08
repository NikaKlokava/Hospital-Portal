import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/auth';
import { BehaviorSubject, finalize, Observable, tap } from 'rxjs';
import { LoaderService } from '../shared/components/loader/loader.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAdminSubject = new BehaviorSubject<boolean>(false);

  isAdmin: Observable<boolean> = this.isAdminSubject.asObservable();

  constructor(
    private auth: AngularFireAuth,
    private loaderService: LoaderService
  ) {
    this.auth.user.subscribe((userData) =>
      userData?.uid === 'IeO6XjdtI7QI5OQoyioIHfOZgGF2'
        ? this.isAdminSubject.next(true)
        : this.isAdminSubject.next(false)
    );
  }

  login(): void {
    this.auth.signInWithPopup(new firebase.GoogleAuthProvider());
  }

  logout(): void {
    this.auth.signOut();
  }

  getAuthInfo(): Observable<firebase.UserInfo | null> {
    return this.auth.user;
  }
}
