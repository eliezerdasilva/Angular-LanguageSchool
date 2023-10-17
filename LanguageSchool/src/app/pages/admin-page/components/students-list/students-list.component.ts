import { Component, OnInit } from '@angular/core';
import { StudentDTO } from 'src/app/dtos/student/student.dto';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  private students: StudentDTO[] = []

  constructor(private readonly studentsService: StudentService) {}


  ngOnInit(): void {
    this.studentsService.findAll().subscribe((data) => {
      data.map((s) => {
        this.students.push(s)
      })
    })
    console.log(this.students)
  }


}
