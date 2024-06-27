import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularFormExtensionComponent } from 'angular-form-extension';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularFormExtensionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-form-extension';
}
