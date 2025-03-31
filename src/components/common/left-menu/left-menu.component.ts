import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../models/menuItem';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  imports: [NgFor, NgIf, RouterLink],
  
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css'
})
export class LeftMenuComponent {
  @Input() 
  menuList! : MenuItem[];


}
