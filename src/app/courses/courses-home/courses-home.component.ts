import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-home',
  templateUrl: './courses-home.component.html',
  styleUrls: ['./courses-home.component.css']
})
export class CoursesHomeComponent {
  updateCourses(updatedCourses: any[]) {
    this.courses = updatedCourses;
  }
  courses = [
    {
      courseName: 'Fundamentals in Angular',
      id: 1,
      duration: 12,
      courseFee: 45000,
      type: 'Part-time'
    },
    {
      courseName: 'Advanced Java Programming',
      id: 2,
      duration: 24,
      courseFee: 60000,
      type: 'Full-time'
    },
    {
      courseName: 'Data Structures and Algorithms',
      id: 3,
      duration: 16,
      courseFee: 55000,
      type: 'Part-time'
    },
    {
      courseName: 'Web Development with React',
      id: 4,
      duration: 20,
      courseFee: 65000,
      type: 'Full-time'
    },
    {
      courseName: 'Introduction to Machine Learning',
      id: 5,
      duration: 10,
      courseFee: 40000,
      type: 'Part-time'
    },
    {
      courseName: 'Digital Marketing Fundamentals',
      id: 6,
      duration: 8,
      courseFee: 25000,
      type: 'Online'
    },
    {
      courseName: 'Python for Data Science',
      id: 7,
      duration: 14,
      courseFee: 50000,
      type: 'Full-time'
    },
    {
      courseName: 'Artificial Intelligence Basics',
      id: 8,
      duration: 16,
      courseFee: 55000,
      type: 'Part-time'
    },
    {
      courseName: 'Cloud Computing Essentials',
      id: 9,
      duration: 12,
      courseFee: 45000,
      type: 'Online'
    },
    {
      courseName: 'Business Analysis Fundamentals',
      id: 10,
      duration: 10,
      courseFee: 30000,
      type: 'Part-time'
    },
    {
      courseName: 'Advanced Excel Techniques',
      id: 11,
      duration: 8,
      courseFee: 20000,
      type: 'Online'
      }
  ];
}
