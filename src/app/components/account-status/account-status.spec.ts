import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatusComponent } from './account-status';

describe('AccountStatus', () => {
  let component: AccountStatusComponent;
  let fixture: ComponentFixture<AccountStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
