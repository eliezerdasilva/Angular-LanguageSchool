import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {

    private show = true;

  showSidebar() {

    this.show = !this.show

    const sidebar = document.querySelector('.sidebar')
    sidebar!.classList.add('hidden')

    const sidebarButton = document.querySelector('.sidebar-button')
    

    if (this.show) {
      sidebar!.classList.remove('hidden')
      sidebarButton!.classList.add('hidden')
    } else {
      sidebar!.classList.add('hidden')
      sidebarButton!.classList.remove('hidden')
    }

  }
}
