import { Component, Input,Output, ElementRef, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private el:ElementRef) {}

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }


  @Input() courseList: any;
  @Output() updatedArray = new EventEmitter<any[]>();

  update() {
    this.updatedArray.emit(this.courseList);
  }
  
  currentPage = 0;

  show = false;
  showAll = false;

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage-index)<3;
  }
  
  onClick() {
    this.show = !this.show;
  }

  newCourseName='';
  newCourseId='';
  newCourseDuration='';
  newCourseFee='';
  newCourseType='';

  editType(value:string) {
    this.newCourseType = value;
  }
  editDuration(value:string) {
    this.newCourseDuration = value;
  }
  editFee(value:string) {
    this.newCourseFee = value;
  }
  editID(value:string) {
    this.newCourseId = value;
  }
  editCourseName(value: string) {
    this.newCourseName = value;
  }

  updateValues(index: number) {
    this.courseList[index] =
    {
      courseName: this.newCourseName,
      id: this.newCourseId,
      duration: this.newCourseDuration,
      courseFee: this.newCourseFee,
      type: this.newCourseType
    }
  }

  deleteCourse(index:number) {
    this.courseList.splice(index, 1);
  }
}
