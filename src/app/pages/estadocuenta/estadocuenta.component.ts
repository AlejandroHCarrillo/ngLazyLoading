import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadocuenta',
  imports: [],
  templateUrl: './estadocuenta.component.html',
  styleUrl: './estadocuenta.component.css'
})
export class EstadocuentaComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}