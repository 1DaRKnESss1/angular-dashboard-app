import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountsTable } from './my-accounts-table';

describe('MyAccountsTable', () => {
  let component: MyAccountsTable;
  let fixture: ComponentFixture<MyAccountsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAccountsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccountsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
