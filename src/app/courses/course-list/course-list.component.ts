import { Component, Input, ElementRef,OnInit} from '@angular/core';


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
  
  currentPage = 0;

  show = false;
  showAll = false;

  checkWindowIndex(index: number) {
    // return Math.abs(this.currentPage-index)<5;
  }
  
  onClick() {
    this.show = !this.show;
  }
}
