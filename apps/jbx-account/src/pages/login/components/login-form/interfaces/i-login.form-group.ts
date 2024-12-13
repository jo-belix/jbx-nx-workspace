import { FormControl } from "@angular/forms";

export interface ILoginFormGroup {
    email: FormControl<string | null>;
    password: FormControl<string | null>;
}