import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../models/menuItem';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-left-menu',
  imports: [RouterLink, NgFor, NgIf],
  
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css'
})
export class LeftMenuComponent {
  @Input() 
  menuList! : MenuItem[];


}
