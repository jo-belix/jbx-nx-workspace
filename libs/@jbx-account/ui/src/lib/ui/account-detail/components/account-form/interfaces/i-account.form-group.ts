import { FormControl } from "@angular/forms";

export interface IAccountFormGroup {
    id: FormControl<number | null>;
    name: FormControl<string | null>;
}