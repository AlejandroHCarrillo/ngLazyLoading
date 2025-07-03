import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finanzas-list',
  imports: [],
  templateUrl: './finanzas-list.component.html',
  styleUrl: './finanzas-list.component.css'
})
export class FinanzasListComponent  implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
