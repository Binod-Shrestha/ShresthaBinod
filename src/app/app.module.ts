import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectPageComponent } from './project-page/project-page.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { VolunteerPageComponent } from './volunteer-page/volunteer-page.component';
import { ProjectDetailsPageComponent } from './project-details-page/project-details-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CourseDetailPageComponent } from './course-detail-page/course-detail-page.component';
import { JobsDetailPageComponent } from './jobs-detail-page/jobs-detail-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
import {FormsModule} from '@angular/forms';
import {PortfolioService} from './portfolio.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectPageComponent,
    CoursePageComponent,
    JobsPageComponent,
    ContactPageComponent,
    VolunteerPageComponent,
    ProjectDetailsPageComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    CourseDetailPageComponent,
    JobsDetailPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,

    ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
