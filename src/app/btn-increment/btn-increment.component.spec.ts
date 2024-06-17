import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnIncrementComponent } from './btn-increment.component';

describe('BtnIncrementComponent', () => {
  let component: BtnIncrementComponent;
  let fixture: ComponentFixture<BtnIncrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnIncrementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
