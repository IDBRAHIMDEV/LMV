import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  myCourse = {
    id: 0,
    name: '',
    active: true
  };

  courses = [
    {id: 1, name: 'Learn VueJS',
  active: true},
    {id: 2, name: 'Learn React',
  active: false},
    {id: 3, name: 'Learn Angular',
  active: false},
    {id: 4, name: 'Learn Spring Boot',
  active: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  addCourse() {
    //this.courses.unshift(this.myCourse);
    this.courses = [this.myCourse, ...this.courses];
    this.myCourse = {
      id: 0,
      name: '',
      active: true
    };
  }


  deleteCourse(id) {
    this.courses = this.courses.filter(course => course.id !== id)
  }

  statusCourse(course) {
    course.active = !course.active;
  }

}
