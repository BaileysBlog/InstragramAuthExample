import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './UI/components/login/login.component';
import { HomeComponent } from './UI/components/home/home.component';
import { InstagramAuthComponent } from './UI/components/instagram-auth/instagram-auth.component';

const routes: Routes =
  [
    {
      path: 'login', component: LoginComponent, children: [
        {path: 'instagram', component: InstagramAuthComponent}
    ] },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '**', redirectTo:'' } 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
