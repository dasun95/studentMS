import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {
  @Input() studentList: any;

  searchedStudent: any;
  searchResult:any;

  // isMatched = false;
  onInput(enteredID: string) {
    this.searchedStudent = '';
    this.searchResult = false;
    for (const student of this.studentList) {
      if (student.studentId.toString() === enteredID) {
        // this.isMatched = true;
        this.searchedStudent = student;
        this.searchResult = true;
        break;
      }
    }
  }
}
