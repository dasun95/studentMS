import { Component } from '@angular/core';

@Component({
  selector: 'app-students-home',
  templateUrl: './students-home.component.html',
  styleUrls: ['./students-home.component.css']
})
export class StudentsHomeComponent {

  students = [
    {
      fullName: 'John Doe',
      dateOfBirth: '01/01/1990',
      contactNumber: '09123456789',
      nicNumber: '1234567890123',
      registeredCoursesId: [2, 4, 6],
      studentId : 1
    },

    {
      fullName: 'Jane Smith',
      dateOfBirth: '08/05/1995',
      contactNumber: '09432165487',
      nicNumber: '4567890123456',
      registeredCoursesId: [1, 3, 5],
      studentId : 2
    },

    {
      fullName: 'Tom Brown',
      dateOfBirth: '12/11/1998',
      contactNumber: '09876543210',
      nicNumber: '7890123456789',
      registeredCoursesId: [2, 5, 6],
      studentId : 3
    },

    {
      fullName: 'Sara Lee',
      dateOfBirth: '03/07/1994',
      contactNumber: '09234567891',
      nicNumber: '2345678901234',
      registeredCoursesId: [1, 4, 6],
      studentId : 4
    },

    {
      fullName: 'Max Johnson',
      dateOfBirth: '23/09/2000',
      contactNumber: '09654321098',
      nicNumber: '5678901234567',
      registeredCoursesId: [3, 4, 5],
      studentId : 5
    },

    {
      fullName: 'Anna Garcia',
      dateOfBirth: '15/02/1997',
      contactNumber: '09123456789',
      nicNumber: '9012345678901',
      registeredCoursesId: [1, 2, 5],
      studentId : 6
    },

    {
      fullName: 'Mike Davis',
      dateOfBirth: '27/06/1996',
      contactNumber: '09432165487',
      nicNumber: '2345678901234',
      registeredCoursesId: [2, 3, 6],
      studentId : 7
    },

    {
      fullName: 'Emily Thomas',
      dateOfBirth: '09/12/1993',
      contactNumber: '09876543210',
      nicNumber: '5678901234567',
      registeredCoursesId: [1, 4, 5],
      studentId : 8
    },

    {
      fullName: 'Alex Stuart',
      dateOfBirth: '17/02/1999',
      contactNumber: '09477583658',
      nicNumber: '5464696465',
      registeredCoursesId: [1, 3, 5],
      studentId : 9
    },

    {
      fullName: 'Maria Hernandez',
      dateOfBirth: '02/04/1992',
      contactNumber: '09654321098',
      nicNumber: '8901234567890',
      registeredCoursesId: [2, 4, 6],
      studentId : 10
    }
  ];
}
