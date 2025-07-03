import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morosos-list',
  imports: [],
  templateUrl: './morosos-list.component.html',
  styleUrl: './morosos-list.component.css'
})
export class MorososListComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
