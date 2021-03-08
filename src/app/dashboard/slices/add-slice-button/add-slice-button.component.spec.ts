import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSliceButtonComponent } from './add-slice-button.component';

describe('AddSliceButtonComponent', () => {
  let component: AddSliceButtonComponent;
  let fixture: ComponentFixture<AddSliceButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSliceButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSliceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
