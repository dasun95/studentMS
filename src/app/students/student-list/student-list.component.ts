import { Component, Input, ElementRef,OnInit } from '@angular/core';

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
