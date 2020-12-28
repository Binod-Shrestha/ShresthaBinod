import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectPageComponent} from './project-page/project-page.component';
import {ProjectDetailsPageComponent} from './project-details-page/project-details-page.component';
import {CoursePageComponent} from './course-page/course-page.component';
import {JobsPageComponent} from './jobs-page/jobs-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {VolunteerPageComponent} from './volunteer-page/volunteer-page.component';
import {CourseDetailPageComponent} from './course-detail-page/course-detail-page.component';

// @ts-ignore
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent, pathMatch: 'full'},
  { path: 'project', component: ProjectPageComponent },
  { path: 'project/:id', component: ProjectDetailsPageComponent },
  { path: 'course', component: CoursePageComponent},
  { path: 'course/:id', component: CourseDetailPageComponent},
  { path: 'jobs', component: JobsPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'volunteer', component: VolunteerPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
