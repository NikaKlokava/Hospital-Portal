import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { ModalService } from '../modal/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'hp-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss'],
})
export class BookAppointmentComponent implements OnInit, OnDestroy {
  isUserExist!: boolean;
  isAdmin!: boolean;
  userSubscription!: Subscription;
  adminSubscription!: Subscription;

  constructor(
    private modalService: ModalService,
    private authService: AuthService
  ) {}
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.adminSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.adminSubscription = this.authService.isAdmin.subscribe(
      (data) => (this.isAdmin = data)
    );
    this.userSubscription = this.authService
      .getAuthInfo()
      .subscribe((userData) =>
        userData ? (this.isUserExist = true) : (this.isUserExist = false)
      );
  }

  openModal() {
    if (this.isUserExist) {
      this.modalService.open('appointment-form');
    } else {
      this.modalService.open('login-form');
    }
  }
}
