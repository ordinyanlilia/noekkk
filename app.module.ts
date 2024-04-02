import { NgModule } from '@angular/core';
import { RouterOutlet, RouterLink, Router} from "@angular/router";
import {Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ContentSectionComponent } from './content-section/content-section.component'; 
import { AppRoutingModule } from './app-routing.module';
import { ApplicantComponent } from './applicant/applicant.component';


@NgModule({
  declarations: [
    
    ContentSectionComponent,
    
 // Добавьте ваш компонент в список деклараций
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
})

export class AppModule { }
