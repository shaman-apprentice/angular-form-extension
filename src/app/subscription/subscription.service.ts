import { Injectable } from "@angular/core";
import { SubscriptionOption } from "./subscription.model";

@Injectable({ providedIn: "root" })
export class SubscriptionService {
  getAvailableServices(): Promise<SubscriptionOption[]> {
    return Promise.resolve([
      { price: "0€", description: "Basic" },
      { price: "9,99€", description: "Advanced" },
      { price: "49,99€", description: "Expert" },
    ]);
  }
}
