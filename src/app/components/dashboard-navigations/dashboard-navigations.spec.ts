import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavigations } from './dashboard-navigations';

describe('DashboardNavigations', () => {
  let component: DashboardNavigations;
  let fixture: ComponentFixture<DashboardNavigations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardNavigations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNavigations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
