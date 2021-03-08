import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliceCardComponent } from './slice-card.component';

describe('SliceCardComponent', () => {
  let component: SliceCardComponent;
  let fixture: ComponentFixture<SliceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
