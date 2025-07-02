import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftMenuComponent } from "../components/common/left-menu/left-menu.component";
import { TopbarComponent } from "../components/common/topbar/topbar.component";
import { MenuItem } from '../models/menuItem';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [RouterOutlet, LeftMenuComponent, TopbarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  title = 'Great Admin';
  menu! : MenuItem[];
}