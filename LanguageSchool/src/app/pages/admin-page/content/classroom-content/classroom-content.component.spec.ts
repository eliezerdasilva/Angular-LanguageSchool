import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomContentComponent } from './classroom-content.component';

describe('ClassroomContentComponent', () => {
  let component: ClassroomContentComponent;
  let fixture: ComponentFixture<ClassroomContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomContentComponent]
    });
    fixture = TestBed.createComponent(ClassroomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
