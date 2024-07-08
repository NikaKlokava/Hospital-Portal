import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.getAuthInfo().pipe(
      map((userInfo) => {
        if (userInfo && userInfo.uid !== environment.adminUid) {
          return true;
        } else {
          this.router.navigate(['home']);
          return false;
        }
      })
    );
  }
}

export const UserAuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => inject(UserGuard).canActivate(next, state);
