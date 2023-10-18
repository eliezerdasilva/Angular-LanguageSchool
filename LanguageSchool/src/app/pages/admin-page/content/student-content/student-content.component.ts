import { Component, OnInit, Output } from '@angular/core';
import { StudentDTO } from 'src/app/dtos/student/student.dto';
import { ModalService } from 'src/app/services/modal/modal.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student-content',
  templateUrl: './student-content.component.html',
  styleUrls: ['./student-content.component.scss']
})
export class StudentContentComponent implements OnInit{

  constructor(private readonly studentService: StudentService, private readonly modalService: ModalService) {}

  public students: StudentDTO[] = []
  

  ngOnInit(): void {
    // this.studentService.findAll().subscribe((data) => {
    //   data.map((s) => {
    //     this.students.push(s)
    //   })
    // })
  }

  

  onStudentClick(s: StudentDTO) {
    this.modalService.sendDto(s)
    console.log(s)
    console.log('oiiiiii')
  }
}
