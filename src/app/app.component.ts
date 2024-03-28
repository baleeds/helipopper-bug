import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TippyDirective} from "@ngneat/helipopper";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TippyDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public useHostWidth = false;
}
