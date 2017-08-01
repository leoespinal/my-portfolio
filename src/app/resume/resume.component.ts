import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  devSkills: [string] = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Java', 'Swift 3', 'C', 'Bash Shell', 'Python', 'TypeScript', 'AngularJS', 'Angular 4'];
  devTools: [string] = ['Git', 'GitHub', 'GitSwarm', 'Eclipse', 'XCode 8', 'IntelliJ IDEA', 'WebStorm', 'Jenkins'];
  designTools: [string] = ['Sketch 3'];

  constructor() { }

  ngOnInit() {
  }

}
