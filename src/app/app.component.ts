// app.component.ts

import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterLink, RouterOutlet]
})
export class AppComponent {
  title = 'leonisiaApp';
}
