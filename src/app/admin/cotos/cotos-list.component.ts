import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotos-list',
  imports: [],
  templateUrl: './cotos-list.component.html',
  styleUrl: './cotos-list.component.css'
})
export class CotosListComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}