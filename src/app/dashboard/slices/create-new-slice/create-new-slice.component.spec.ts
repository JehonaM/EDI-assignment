import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSliceComponent } from './create-new-slice.component';

describe('CreateNewSliceComponent', () => {
  let component: CreateNewSliceComponent;
  let fixture: ComponentFixture<CreateNewSliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewSliceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
