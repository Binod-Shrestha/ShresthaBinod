import { Injectable } from '@angular/core';
import {courseLists, projectLists, volunteerLists} from './dummy-data';
import {Course, Project, Volunteer} from './types';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  project: Project;
  course: Course;
  volunteer: Volunteer;

  constructor() { }
  getProjects(){
    return projectLists;
  }
  getProjectById(id){
return this.project = projectLists[id];
  }

  getCourse(){
    return courseLists;
  }
  getCourseById(id){
    return this.course = courseLists[id];
  }

  getVolunteer(){
    return volunteerLists;
  }
  getVolunteerById(id){
    return this.volunteer = volunteerLists[id];
  }
}
