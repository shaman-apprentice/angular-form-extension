import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubscriptionComponent } from './subscription/subscription.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    SubscriptionComponent
  ],
})
export class AppComponent {
}
