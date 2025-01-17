import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient) {}

  all(): Observable<Course[]> {
    return this.http.get<Course[]>(this.getUrl());
  }

  find(id) {
    return this.http.get(this.getUrlWithId(id));
  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    return this.http.put(this.getUrlWithId(course.id), course);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithId(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl}/${id}`;
  }
}
