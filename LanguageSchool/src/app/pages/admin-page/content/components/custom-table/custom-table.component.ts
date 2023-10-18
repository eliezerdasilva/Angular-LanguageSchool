import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent {

  constructor(private readonly modalService: ModalService) {

  }

  @Input()
  dtos?: any

  @Input()
  dtoType?: string


  onSendDtoToParent(dto: any) {
    this.modalService.sendDtoToModal(dto, this.dtoType!)
  }


}
