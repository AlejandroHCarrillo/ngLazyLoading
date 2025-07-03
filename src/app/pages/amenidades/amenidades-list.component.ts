import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amenidades-list',
  imports: [],
  templateUrl: './amenidades-list.component.html',
  styleUrl: './amenidades-list.component.css'
})
export class AmenidadesListComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
