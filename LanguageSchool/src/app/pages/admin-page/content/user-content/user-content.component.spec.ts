import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContentComponent } from './user-content.component';

describe('UserContentComponent', () => {
  let component: UserContentComponent;
  let fixture: ComponentFixture<UserContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserContentComponent]
    });
    fixture = TestBed.createComponent(UserContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
