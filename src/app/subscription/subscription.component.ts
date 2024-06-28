import { Component, OnInit, ViewEncapsulation, inject } from "@angular/core";
import { SubscriptionService } from "./subscription.service";
import { SubscriptionOption } from "./subscription.model";
import { SubscriptionOptionComponent } from "./subscriptionOption/subscriptionOption.component";

@Component({
  selector: "app-subscription",
  templateUrl: "subscription.component.html",
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [SubscriptionOptionComponent]
})
export class SubscriptionComponent implements OnInit {
  private subscriptionService = inject(SubscriptionService);

  protected options: SubscriptionOption[] = [];
  
  async ngOnInit() {
    this.options = await this.subscriptionService.getAvailableServices();
  }
}
