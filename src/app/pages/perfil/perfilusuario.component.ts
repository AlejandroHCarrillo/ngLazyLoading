import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfilusuario',
  imports: [],
  templateUrl: './perfilusuario.component.html',
  styleUrl: './perfilusuario.component.css'
})
export class PerfilusuarioComponent  implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
