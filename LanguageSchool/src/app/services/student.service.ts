import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ServiceConstants from './constants';
import { Observable } from 'rxjs';
import { IService } from './IService';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements IService {

  constructor(private readonly http: HttpClient) { }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(ServiceConstants.BASE_URL + ServiceConstants.STUDENTS)
  }
  findOne(index: number) {
    throw new Error('Method not implemented.');
  }
  create(dto: any): void {
    throw new Error('Method not implemented.');
  }
  update(index: number, dto: any): void {
    throw new Error('Method not implemented.');
  }
  delete(index: number): void {
    throw new Error('Method not implemented.');
  }
}
