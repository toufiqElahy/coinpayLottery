import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetwinnerComponent } from './setwinner.component';

describe('SetwinnerComponent', () => {
  let component: SetwinnerComponent;
  let fixture: ComponentFixture<SetwinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetwinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetwinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
