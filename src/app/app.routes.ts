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
import { authGuard } from '../guards/authGuard';

export const routes: Routes = [
// Rutas no protegidas
  {
    path: '',
    loadComponent: () =>
      import('../components/auth/auth-layout.component').then(m => m.AuthLayoutComponent),
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
      import('../pages/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: 'home',
        loadComponent: () =>
            import('../components/common/home/home.component').then(m => m.HomeComponent),
            canActivate: [authGuard],
      },
      // otras rutas protegidas
    ],
  },
];