import { FormControl, ValidatorFn } from "@angular/forms";
import { passwordValidator } from "./password.valirator";
describe('passwordValidator', () => {
    const validator: ValidatorFn = passwordValidator;
 
    it('should return null for empty value', () => {
      const control = new FormControl('');
      expect(validator(control)).toBeNull();
    });
  
    it('should return null for valid password', () => {
      const control = new FormControl('ValidP@ssw0rd');
      expect(validator(control)).toBeNull();
    });
    it('should return null for valid password', () => {
        const control = new FormControl('ValidP/ssw0rd');
        expect(validator(control)).toBeNull();
      });
  
    it('should return minLength error when password is too short', () => {
      const control = new FormControl('Short1@');
      const result = validator(control);
      expect(result?.['minLength']).toBeTruthy();
    });
  
    it('should return upperCase error when password has no uppercase', () => {
      const control = new FormControl('password123!@#');
      const result = validator(control);
      expect(result?.['upperCase']).toBeTruthy();
    });
  
    it('should return number error when password has no number', () => {
      const control = new FormControl('Password!@#$');
      const result = validator(control);
      expect(result?.['number']).toBeTruthy();
    });
  
    it('should return specialChar error when password has no special character', () => {
      const control = new FormControl('Password123456');
      const result = validator(control);
      expect(result?.['specialChar']).toBeTruthy();
    });
  
    it('should return multiple errors when password fails multiple criteria', () => {
      const control = new FormControl('weak');
      const result = validator(control);
      expect(result?.['minLength']).toBeTruthy();
      expect(result?.['upperCase']).toBeTruthy();
      expect(result?.['number']).toBeTruthy();
      expect(result?.['specialChar']).toBeTruthy();
    });
  });

