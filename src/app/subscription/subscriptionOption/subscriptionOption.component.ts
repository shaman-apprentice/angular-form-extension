import { Component, Input, ViewEncapsulation } from "@angular/core";
import { SubscriptionOption } from "../subscription.model";

@Component({
  selector: "app-subscription-option",
  templateUrl: "subscriptionOption.component.html",
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class SubscriptionOptionComponent {
  @Input({ required: true }) option!: SubscriptionOption;
}
