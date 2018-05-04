import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../../Material Design/material.module';
import { FullHeightDirective } from './full-height.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InstagramAuthComponent } from './instagram-auth/instagram-auth.component';


@NgModule({
  declarations: [LoginComponent, HomeComponent, FullHeightDirective, InstagramAuthComponent],
  imports: [NgbModule, ReactiveFormsModule,RouterModule,MaterialModule, CommonModule],
  exports:[FullHeightDirective]
})
export class ComponentsModule { }
