import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftMenuComponent } from "../components/common/left-menu/left-menu.component";
import { TopbarComponent } from "../components/common/topbar/topbar.component";
import { MenuItem } from '../models/menuItem';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [RouterOutlet, LeftMenuComponent, TopbarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent implements OnInit {
  title = 'Great Admin';
  menu! : MenuItem[];

  ngOnInit(): void {
    this.filloutMenu();
  }

  filloutMenu(){
    this.menu = [
                  { label: 'Inicio', 
                    route: 'home',
                    icon: 'fa-tachometer-alt'
                  },
                  { label: 'Comunicados', 
                    route: 'comunicados',
                    icon: 'fa-tachometer-alt' 
                  },
                  { label: 'Documentos', 
                    route: 'documentos',
                    icon: 'fa-tachometer-alt' 
                  },
                  { label: 'Estado de cuenta', 
                    route: 'estadodecuenta',
                    icon: 'fa-tachometer-alt' 
                  },
                  { label: 'Pagos', 
                    route: 'pagos',
                    icon: 'fa-tachometer-alt' 
                  },
                  { label: 'Amenidades', 
                    route: 'amenidades',
                    icon: 'fa-tachometer-alt' 
                  },
                  { label: 'Finanzas', 
                    route: 'finanzas',
                    icon: 'fa-tachometer-alt' 
                  },
                  { label: 'Encuestas', 
                    route: 'encuestas',
                    icon: 'fa-tachometer-alt' 
                  },
                  { label: 'Levantar un ticket', 
                    route: 'tickets',
                    icon: 'fa-tachometer-alt' 
                  },
                  { label: 'Morosos', 
                    route: 'morosos',
                    icon: 'fa-tachometer-alt' 
                  },
                  { label: 'Mi perfil', 
                    route: 'myprofile',
                    icon: 'fa-tachometer-alt' 
                  },
                  { label: 'Login', 
                    route: 'login',
                    icon: 'fa-tachometer-alt' 
                  },
                  { label: 'Log out', 
                    route: 'logout',
                    icon: 'fa-tachometer-alt' 
                  },
                ];
  }
}