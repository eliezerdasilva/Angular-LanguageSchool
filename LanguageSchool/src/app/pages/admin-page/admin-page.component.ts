import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {

  private selectedBtn: number = 0;

  constructor(private readonly router: Router, private readonly modalService: ModalService) {}


  onOptionClick(select: string) {
    this.router.navigate([`/admin/${select}`])
  }

  onCreateClick(select: string) {
    console.log('click')
    this.modalService.sendDtoToModal(null, select)
  }

}
