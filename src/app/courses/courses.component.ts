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
    active: true,
    vote: {
      like: 0,
      dislike: 0
    }
  };

  courses = [
    {id: 1, name: 'Learn VueJS', active: true, vote: {like: 20, dislike: 33}},
    {id: 2, name: 'Learn React', active: false, vote: {like: 30, dislike: 13}},
    {id: 3, name: 'Learn Angular', active: false, vote: {like: 12, dislike: 2}},
    {id: 4, name: 'Learn Spring Boot', active: true, vote: {like: 9, dislike: 4}}
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
      active: true,
      vote: {
        like: 0,
        dislike: 0
      }
    };
  }


  deleteCourse(id) {
    this.courses = this.courses.filter(course => course.id !== id)
  }

  statusCourse(course) {
    course.active = !course.active;
  }

  syncVote(data, course) {
     if(data.type) {
        course.vote.like = data.value;
     }else {
       course.vote.dislike = data.value
     }
  }

}
