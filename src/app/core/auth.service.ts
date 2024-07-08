import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAdminSubject = new BehaviorSubject<boolean>(false);

  isAdmin: Observable<boolean> = this.isAdminSubject.asObservable();

  constructor(private auth: AngularFireAuth) {
    this.auth.user.subscribe((userData) =>
      userData?.uid === environment.adminUid
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
