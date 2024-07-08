import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.getAuthInfo().pipe(
      map((userInfo) => {
        if (userInfo && userInfo.uid === 'IeO6XjdtI7QI5OQoyioIHfOZgGF2') {
          return true;
        } else {
          this.router.navigate(['home']);
          return false;
        }
      })
    );
  }
}

export const AdminAuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => inject(AdminGuard).canActivate(next, state);
