// import { Routes } from '@angular/router';
// import { HomeComponent } from '../components/common/home/home.component';
// import { ListUsersComponent } from '../components/admin/users/list-users/list-users.component';
// import { EditUserComponent } from '../components/admin/users/edit-user/edit-user.component';
// import { LoginComponent } from '../components/auth/login/login.component';
// import { RegisterComponent } from '../components/auth/register/register.component';
// import { NotfoundComponent } from '../pages/notfound/notfound.component';

// export const routes: Routes = [
//     {path: 'login',
//         loadComponent: () =>
//         import('../components/auth/login/login.component').then(m => m.LoginComponent),
//     },
//     { path: 'register',
//         loadComponent: () =>
//         import('../components/auth/register/register.component').then(m => m.RegisterComponent),
//     },
//     { path: '',
//     loadComponent: () =>
//       import('../app/app.component').then(m => m.AppComponent),
//     children: [
//       {
//         path: 'home',
//         loadComponent: () =>
//           import('../components/common/home/home.component').then(m => m.HomeComponent),
//       },
//       // otras rutas protegidas
//     ],
//   },

//     // {path: 'home', component: HomeComponent },
//     // {path: 'users', component: ListUsersComponent},
//     // {path: 'users/edit', component: EditUserComponent},
//     // {path: 'login', component: LoginComponent},
//     // {path: 'registrer', component: RegisterComponent},
//     // {path: '', redirectTo: '/home',  pathMatch: 'full'},
//     // {path: '**', component: NotfoundComponent},
// ];


import { Routes } from '@angular/router';
import { authGuard } from './guards/authGuard';

export const routes: Routes = [
// Rutas no protegidas
  {
    path: '',
    loadComponent: () =>
      import('../app/auth/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
            {path: 'login',
                loadComponent: () =>
                import('../app/auth/login/login.component').then(m => m.LoginComponent),
            },
            { path: 'register',
                loadComponent: () =>
                import('../app/auth/register/register.component').then(m => m.RegisterComponent),
            },
            { path: 'resetpass',
                loadComponent: () =>
                import('../app/auth/resetpass/resetpass.component').then(m => m.ResetpassComponent),
            },
    ],
  },
// Rutas protegidas
  {
    path: '',
    loadComponent: () =>
      import('./pages/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: 'home',
        loadComponent: () =>
            import('./pages/home/home.component').then(m => m.HomeComponent),
            canActivate: [authGuard],
      },
      {
        path: 'comunicados',
        loadComponent: () =>
            import('./pages/comunicados/comunicados-list.component').then(m => m.ComunicadosListComponent),
            canActivate: [authGuard],
      },
      {
        path: 'documentos',
        loadComponent: () =>
            import('./pages/documentos/documentos-list.component').then(m => m.DocumentosListComponent),
            canActivate: [authGuard],
      },
      {
        path: 'pagos',
        loadComponent: () =>
            import('./pages/pagos/pagos-list.component').then(m => m.PagosListComponent),
            canActivate: [authGuard],
      },
      {
        path: 'estadodecuenta',
        loadComponent: () =>
            import('./pages/estadocuenta/estadocuenta.component').then(m => m.EstadocuentaComponent),
            canActivate: [authGuard],
      },
      {
        path: 'amenidades',
        loadComponent: () =>
            import('./pages/amenidades/amenidades-list.component').then(m => m.AmenidadesListComponent),
            canActivate: [authGuard],
      },
      {
        path: 'finanzas',
        loadComponent: () =>
            import('./pages/finanzas/finanzas-list.component').then(m => m.FinanzasListComponent),
            canActivate: [authGuard],
      },
      {
        path: 'tickets',
        loadComponent: () =>
            import('./pages/tickets/tickets-list.component').then(m => m.TicketsListComponent),
            canActivate: [authGuard],
      },
      {
        path: 'morosos',
        loadComponent: () =>
            import('./pages/morosos/morosos-list.component').then(m => m.MorososListComponent),
            canActivate: [authGuard],
      },
      {
        path: 'myprofile',
        loadComponent: () =>
            import('./pages/perfil/perfilusuario.component').then(m => m.PerfilusuarioComponent),
            canActivate: [authGuard],
      },


      // otras rutas protegidas de usuario
    ],
  },
  // Rutas de administracion
  {
    path: '',
    loadComponent: () =>
      import('./pages/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: 'usuarios',
        loadComponent: () =>
            import('./admin/usuarios/usuarios-list.component').then(m => m.UsuariosListComponent),
            canActivate: [authGuard],
      },
      {
        path: 'cotos',
        loadComponent: () =>
            import('./admin/cotos/cotos-list.component').then(m => m.CotosListComponent),
            canActivate: [authGuard],
      },
      {
        path: 'residentes',
        loadComponent: () =>
            import('./admin/residentes/residentes-list.component').then(m => m.ResidentesListComponent),
            canActivate: [authGuard],
      },
      // otras rutas protegidas de administracion
        // Ruta por defecto para no encontradas
      {
        path: '**',
        loadComponent: () =>
          import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent),
      },
    ],
  },
];