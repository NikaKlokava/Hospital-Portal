import { Component, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { ModalService } from '../modal/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  private subscription!: Subscription;

  constructor(
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  ngOnDestroy(): void {
    // this.subscription && this.subscription.unsubscribe();
  }

  login(): void {
    this.authService.login();
    this.authService
      .getAuthInfo()
      .subscribe((data) => data && this.modalService.close('login-form'));
  }
}
