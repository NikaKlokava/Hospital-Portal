import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  onNavigate(): void {
    this.router.navigate(['about']);
  }
}
