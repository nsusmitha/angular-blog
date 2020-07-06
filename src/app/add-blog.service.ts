import { Blog } from './blog';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddBlogService {
  private blogSet: Array<Blog> = [];

  // $ = stream
  private blogSubject = new BehaviorSubject<Blog[]>(this.blogSet);

  constructor() {}

  get blogs$() {
    return this.blogSubject as Observable<Blog[]>;
  }

  addBlog(blog: Blog) {
    this.blogSet.push(blog);

    this.blogSubject.next(this.blogSet);
  }
}
