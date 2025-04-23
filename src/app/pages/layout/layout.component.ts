import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  router = inject(Router);

  onLogout() {
    localStorage.removeItem('ticketUser');
    this.router.navigate(['login']);
  }

}
