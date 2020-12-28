import { Component, OnInit } from '@angular/core';
import {Project} from '../types';
import {projectLists} from '../dummy-data';
import {PortfolioService} from '../portfolio.service';
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  projects: Project[] = [];
  constructor(private _portfolioService: PortfolioService) { }
  ngOnInit(): void {
    this.projects = this._portfolioService.getProjects();
  }
onSelect(projects){

}
}
