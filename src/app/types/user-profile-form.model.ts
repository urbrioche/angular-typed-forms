import { FormControl } from '@angular/forms';

export interface UserProfileFormModel {
  email: FormControl<string | null>,
  password: FormControl<string | null>,
  address: FormControl<string | null>,
  city: FormControl<string | null>,
  zip: FormControl<string | null>,
}
