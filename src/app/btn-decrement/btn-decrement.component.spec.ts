import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDecrementComponent } from './btn-decrement.component';

describe('BtnDecrementComponent', () => {
  let component: BtnDecrementComponent;
  let fixture: ComponentFixture<BtnDecrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnDecrementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnDecrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
