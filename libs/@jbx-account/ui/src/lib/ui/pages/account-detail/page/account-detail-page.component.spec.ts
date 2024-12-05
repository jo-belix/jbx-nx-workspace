import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountDetailPageComponent } from './account-detail-page.component';

describe('AccountDetailPageComponent', () => {
  let component: AccountDetailPageComponent;
  let fixture: ComponentFixture<AccountDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDetailPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
