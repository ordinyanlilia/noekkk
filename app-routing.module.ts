import { NgModule } from '@angular/core';
import {Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { RouterOutlet , RouterLink} from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'applicant', component: ApplicantComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
