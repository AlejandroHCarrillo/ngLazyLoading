import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftMenuComponent } from "../components/common/left-menu/left-menu.component";

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [RouterOutlet, LeftMenuComponent],
  template: `
    <app-left-menu></app-left-menu>
    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class MainLayoutComponent {}