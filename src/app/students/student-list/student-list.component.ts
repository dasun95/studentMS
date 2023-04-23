import { Component, Input, Output, ElementRef,OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{

  constructor(private el:ElementRef) {}

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }


  @Input() studentList: any;
  @Output() updatedArray = new EventEmitter<any[]>();
  
  update() {
    this.updatedArray.emit(this.studentList);
  }

  currentPage = 0;

  show = false;
  showAll = false;

  checkWindowIndex(index: number) {
    // return Math.abs(this.currentPage-index)<5;
  }
  
  onClick() {
    this.show = !this.show;
  }

  
  newFullName='';
  newDateOfBirth='';
  newContactNumber='';
  newNicNumber='';
  newRegisteredCourses='';
  newStudentId='';

  editCourses(value:string) {
    this.newRegisteredCourses = value;
  }
  editContact(value:string) {
    this.newContactNumber = value;
  }
  editNic(value:string) {
    this.newNicNumber = value;
  }
  editDateofBirth(value:string) {
    this.newDateOfBirth = value;
  }
  editName(value: string) {
    this.newFullName = value;
  }
  editStudentId(value: string) {
    this.newStudentId = value;
  }

  updateValues(index: number) {
    this.studentList[index] =
    {
      fullName: this.newFullName,
      dateOfBirth: this.newDateOfBirth,
      contactNumber: this.newContactNumber,
      nicNumber: this.newNicNumber,
      registeredCoursesId: this.newRegisteredCourses,
      studentId: this.newStudentId
    }
  }

  deleteStudent(index:number) {
    this.studentList.splice(index, 1);
  }
}
