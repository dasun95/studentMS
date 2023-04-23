
import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})

export class CourseSearchComponent {
  @Input() courseList: any;

  searchedCourse: any;
  searchResult:any;

  // isMatched = false;
  onInput(enteredID: string) {
    this.searchedCourse = '';
    this.searchResult = false;
    for (const course of this.courseList) {
      if (course.id.toString() === enteredID) {
        // this.isMatched = true;
        this.searchedCourse = course;
        this.searchResult = true;
        break;
      }
    }
  }
}
