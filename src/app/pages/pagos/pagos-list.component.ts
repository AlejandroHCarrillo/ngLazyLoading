import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagos-list',
  imports: [],
  templateUrl: './pagos-list.component.html',
  styleUrl: './pagos-list.component.css'
})
export class PagosListComponent  implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}