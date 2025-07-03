import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos-list',
  imports: [],
  templateUrl: './documentos-list.component.html',
  styleUrl: './documentos-list.component.css'
})
export class DocumentosListComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}