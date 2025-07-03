import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residentes-list',
  imports: [],
  templateUrl: './residentes-list.component.html',
  styleUrl: './residentes-list.component.css'
})
export class ResidentesListComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
