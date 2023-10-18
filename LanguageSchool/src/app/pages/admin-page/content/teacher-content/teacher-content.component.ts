import { Component, OnInit } from '@angular/core';
import { TeacherDTO } from 'src/app/dtos/teacher/teacher.dto';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
  selector: 'app-teacher-content',
  templateUrl: './teacher-content.component.html',
  styleUrls: ['./teacher-content.component.scss']
})
export class TeacherContentComponent implements OnInit {

  constructor(private readonly teacherService: TeacherService) {}

  teachers: TeacherDTO[] = []

  ngOnInit(): void {
    this.teacherService.findAll().subscribe((data) => {
      data.map((t) => {
        this.teachers.push(t)
      })
    })
    console.log(this.teachers)
  }

}
