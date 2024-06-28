import { AsyncValidatorFn, FormControlOptions, FormControlState, ValidatorFn } from "@angular/forms"

export type Config<Value, Metadata> = {
  value: Value | FormControlState<Value>,
  validatorOrOpts?: ValidatorFn | ValidatorFn[] | FormControlOptions | null,
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null,
  metadata: Metadata,
}