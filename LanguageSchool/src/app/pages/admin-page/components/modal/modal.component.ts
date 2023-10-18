import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClassroomDTO } from 'src/app/dtos/classroom/classroom.dto';
import { StudentDTO } from 'src/app/dtos/student/student.dto';
import { TeacherDTO } from 'src/app/dtos/teacher/teacher.dto';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  dto: StudentDTO | TeacherDTO | ClassroomDTO | null = null

  formGrup: FormGroup = new FormGroup({
  })

  constructor(private readonly modalService: ModalService) {
    this.modalService.dataEvent.subscribe((data) => {
      this.dto = data
      this.show()
    })
  }

  hide() {
    const whole = document.querySelector('.whole')
    whole?.classList.add('hidden')
  }

  private show() {
    const whole = document.querySelector('.whole')
    whole?.classList.remove('hidden')
  }

  onCancel() {
    this.hide()
  }

  onSave() {

  }

  onDelete() {

  }


}
