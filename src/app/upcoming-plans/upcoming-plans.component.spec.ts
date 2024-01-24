import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingPlansComponent } from './upcoming-plans.component';

describe('UpcomingPlansComponent', () => {
  let component: UpcomingPlansComponent;
  let fixture: ComponentFixture<UpcomingPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingPlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
