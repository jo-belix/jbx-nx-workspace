import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountListPageComponent } from './account-list-page.component';

describe('AccountListPageComponent', () => {
  let component: AccountListPageComponent;
  let fixture: ComponentFixture<AccountListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountListPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
