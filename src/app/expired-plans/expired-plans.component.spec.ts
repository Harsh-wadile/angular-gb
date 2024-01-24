import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredPlansComponent } from './expired-plans.component';

describe('ExpiredPlansComponent', () => {
  let component: ExpiredPlansComponent;
  let fixture: ComponentFixture<ExpiredPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpiredPlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpiredPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
