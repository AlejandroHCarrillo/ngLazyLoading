import { NgFor, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  items = [
    { title: 'Amenidades', image: 'assets/Images/pool.jpg', link: '/amenidades' },
    { title: 'Comunicados', image: 'assets/Images/comunicados.jpg', link: '/comunicados' },
    { title: 'Finanzas', image: 'assets/Images/finanzas.jpg', link: '/finanzas' },
    { title: 'Estado de cuenta', image: 'assets/Images/pagos.jpg', link: '/pagos' },
  ];

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  
}
