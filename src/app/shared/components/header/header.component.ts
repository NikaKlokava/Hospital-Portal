import { Component } from '@angular/core';
import { NavbarItem } from './navbar.model';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService } from '../modal/modal.service';
import * as firebase from 'firebase/auth';

@Component({
  selector: 'hp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userInfo!: Observable<firebase.UserInfo | null>;
  isAdmin!: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.userInfo = this.authService.getAuthInfo();
    this.authService.isAdmin.subscribe((data) => {
      this.isAdmin = data;
    });
  }

  login(id: string) {
    this.modalService.open(id);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['home']);
  }

  onNavigate() {
    this.router.navigate(['profile']);
  }

  trackByFn(_i: number, item: NavbarItem): string {
    return item.title;
  }
}
