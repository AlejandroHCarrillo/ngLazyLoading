import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../models/menuItem';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  imports: [RouterLink],
  
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css'
})
export class LeftMenuComponent {
  @Input() 
  menuList! : MenuItem[];


}
