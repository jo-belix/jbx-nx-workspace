import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountItemComponent } from './account-item.component';
import { Account } from '@jbx-account/domain';
import { signal } from '@angular/core';

describe('AccountItemComponent', () => {
  let component: AccountItemComponent;
  let fixture: ComponentFixture<AccountItemComponent>;
  const mockAccount: Account = {
    id: 1,
    name: 'Test Account'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountItemComponent);
    component = fixture.componentInstance;
    (component as any).account = signal(mockAccount);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display account details', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Test Account');
    expect(compiled.textContent).toContain('123456789');
    expect(compiled.textContent).toContain('$1,000.50');
  });

  it('should show loading placeholder when account is null', () => {
    (component as any).account = signal(null);
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Loading account details...');
  });
});
