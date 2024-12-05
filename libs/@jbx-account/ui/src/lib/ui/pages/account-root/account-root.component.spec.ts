import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountRootComponent } from './account-root.component';

describe('AccountRootComponent', () => {
  let component: AccountRootComponent;
  let fixture: ComponentFixture<AccountRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountRootComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
