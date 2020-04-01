import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';


const routes: Routes = [
  // Auth Routing
  {
    path: '',
    component: AuthLayoutComponent,
    children:[
      {path:'', component: LoginRegisterComponent, pathMatch:'full'},
    ]
  },
  // Backend Routing
  {
    path: '',
    component: BackendLayoutComponent,
    children:[
      {path:'dashboard',  component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
