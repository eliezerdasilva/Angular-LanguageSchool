import { Component, OnInit } from '@angular/core';
import { ClassroomDTO } from 'src/app/dtos/classroom/classroom.dto';
import { ClassroomService } from 'src/app/services/classroom/classroom.service';

@Component({
  selector: 'app-classroom-content',
  templateUrl: './classroom-content.component.html',
  styleUrls: ['./classroom-content.component.scss']
})
export class ClassroomContentComponent implements OnInit {

  constructor(private readonly classroomService: ClassroomService) {}

  classrooms: ClassroomDTO[] = []

  ngOnInit(): void {
    this.classroomService.findAll().subscribe((data) => {
      data.map((c) => {
        this.classrooms.push(c)
      })
    })
  }

}
