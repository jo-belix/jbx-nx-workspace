import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


const PASSWORD_MIN_LENGTH = 12;
const PASSWORD_UPPER_CASE_REGEX = /[A-Z]/;
const PASSWORD_NUMBER_REGEX = /[0-9]/;
const PASSWORD_SPECIAL_CHAR_REGEX = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

const PASSWORD_MIN_LENGTH_ERROR_CODE = "passwordMinLength";
const PASSWORD_UPPER_CASE_ERROR_CODE = "passwordUpperCase";
const PASSWORD_NUMBER_ERROR_CODE = "passwordNumber";
const PASSWORD_SPECIAL_CHAR_ERROR_CODE = "passwordSpecialChar";

export const PASSWORD_VALIDATOR_MESSAGES = {
  [PASSWORD_MIN_LENGTH_ERROR_CODE]: $localize`@@passwordMinLengthErrorMessage:Password must contain at least 12 characters`,
  [PASSWORD_UPPER_CASE_ERROR_CODE]: $localize`@@passwordUpperCaseErrorMessage:Password must contain at least one uppercase letter`,
  [PASSWORD_NUMBER_ERROR_CODE]: $localize`@@passwordNumberErrorMessage:Password must contain at least one number`,
  [PASSWORD_SPECIAL_CHAR_ERROR_CODE]: $localize`@@passwordSpecialCharErrorMessage:Password must contain at least one special character`,
};

export const passwordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = control.value;

  if (!value) {
    return null;
  }

  const hasMinLength = value.length >= PASSWORD_MIN_LENGTH;
  const hasUpperCase = PASSWORD_UPPER_CASE_REGEX.test(value);
  const hasNumber = PASSWORD_NUMBER_REGEX.test(value);
  const hasSpecialChar = PASSWORD_SPECIAL_CHAR_REGEX.test(value);

  const errors: ValidationErrors = {};

  if (!hasMinLength) {
    errors[PASSWORD_MIN_LENGTH_ERROR_CODE] = {
      requiredLength: PASSWORD_MIN_LENGTH,
      actualLength: value.length
    };
  }
  if (!hasUpperCase) {
    errors[PASSWORD_UPPER_CASE_ERROR_CODE] = true;
  }
  if (!hasNumber) {
    errors[PASSWORD_NUMBER_ERROR_CODE] = true;
  }
  if (!hasSpecialChar) {
    errors[PASSWORD_SPECIAL_CHAR_ERROR_CODE] = true;
  }

  return Object.keys(errors).length ? errors : null;
};
