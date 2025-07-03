import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notfound',
  imports: [RouterLink],
  templateUrl: './notfound.component.html',
  styles: ``
})
export class NotfoundComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}