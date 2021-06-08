import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaBoxComponent } from './dia-box.component';

describe('DiaBoxComponent', () => {
  let component: DiaBoxComponent;
  let fixture: ComponentFixture<DiaBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
