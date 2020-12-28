import {  Component, OnInit } from '@angular/core';
import {Course} from '../types';
import {courseLists} from '../dummy-data';
import {PortfolioService} from '../portfolio.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  courses: Course[] = [];
  constructor(private _courseService: PortfolioService) { }

  ngOnInit(): void {
    this.courses = this._courseService.getCourse();
  }

}
