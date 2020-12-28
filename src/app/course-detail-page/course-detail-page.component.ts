import { Component, OnInit } from '@angular/core';
import {Course, Project} from '../types';
import {ActivatedRoute} from '@angular/router';
import {courseLists} from '../dummy-data';
import {PortfolioService} from '../portfolio.service';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.css']
})
export class CourseDetailPageComponent implements OnInit {
  course: Course;

  constructor(private _courseService: PortfolioService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.course = this._courseService.getCourseById(id);
  }
}
