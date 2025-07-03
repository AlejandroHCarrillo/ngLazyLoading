import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicados-list',
  imports: [],
  templateUrl: './comunicados-list.component.html',
  styleUrl: './comunicados-list.component.css'
})
export class ComunicadosListComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}