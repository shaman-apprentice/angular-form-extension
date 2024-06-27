import { Component, Input } from "@angular/core";

@Component({
  selector: 'lib-counter',
  template: `
    <button (click)="decrement()">-</button>
    <span>Current Count: {{ counter }}</span>
    <button (click)="increment()">+</button>
  `,
  standalone: true,
})
export class CounterComponent {
  @Input() counter = 0;

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
}