import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}

// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { FooterComponent } from '../components/common/footer/footer.component';
// import { SideBarRightComponent } from "../components/common/side-bar-right/side-bar-right.component";
// import { LeftMenuComponent } from "../components/common/left-menu/left-menu.component";
// import { TopbarComponent } from "../components/common/topbar/topbar.component";
// import { MenuItem } from '../models/menuItem';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, FooterComponent, SideBarRightComponent, LeftMenuComponent, TopbarComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit {
//   title = 'Great Admin';
//   menu! : MenuItem[];

//   constructor() { }

//   ngOnInit(): void {
//     this.filloutMenu();
//   }
  
//   filloutMenu(){
//     this.menu = [
//       { label: 'Home', route: '/home' },
//       { label: 'About', route: '/about' },
//       {
//         label: 'Services', children: [
//           { label: 'Web Development', route: '/services/web-development' },
//           { label: 'SEO', route: '/services/seo' }
//         ]
//       },
//       { label: 'Contact', route: '/contact' }
//     ];
//   }
// }
