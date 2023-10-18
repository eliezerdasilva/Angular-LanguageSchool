import { Component, OnInit, Output } from '@angular/core';
import { StudentDTO } from 'src/app/dtos/student/student.dto';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student-content',
  templateUrl: './student-content.component.html',
  styleUrls: ['./student-content.component.scss']
})
export class StudentContentComponent implements OnInit{

  constructor(private readonly studentService: StudentService) {}

  public students: StudentDTO[] = []
  

  ngOnInit(): void {
    this.studentService.findAll().subscribe((data) => {
      data.map((s) => {
        this.students.push(s)
      })
    })
    console.log(this.students)
  }

}
