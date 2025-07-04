import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesComponent } from './policies';

describe('Policies', () => {
  let component: PoliciesComponent;
  let fixture: ComponentFixture<PoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
