import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {

  constructor(private readonly router: Router) {}


  onOptionClick(select: string) {
    this.router.navigate([`/admin/${select}`])
  }

}
