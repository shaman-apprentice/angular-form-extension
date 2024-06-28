import { FormControl as AngularFormControl } from "@angular/forms";
import { Config } from "../angularForm.model";

export class FormControl<Value = any, Metadata = undefined> extends AngularFormControl {
  // @ts-ignore
  public override value: AngularFormControl<Value>["value"];
  public metadata: Metadata;

  constructor(config: Config<Value, Metadata>) {
    super(config.value, config.validatorOrOpts, config.asyncValidator);
    this.metadata = config.metadata;
  }
}