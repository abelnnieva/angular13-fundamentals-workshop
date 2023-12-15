import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: Course[] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 12,
      favorite: true,
    },
    {
      id: '2',
      title: 'JavaScript The Hardest Parts Ever!',
      description: 'Learn the JavaScript like a pro! with Will',
      percentComplete: 98,
      favorite: true,
    },
    {
      id: '3',
      title: 'Rapid Application Development Patterns',
      description: 'This must be done by 3:30 or else!',
      percentComplete: 75,
      favorite: true,
    },
  ];

  constructor() {}
}
