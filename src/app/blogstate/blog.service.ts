import { Blog } from './blog.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { uuid } from 'uuidv4';

@Injectable({
  providedIn: 'root',
})
export class AddBlogService {
  private blogSet: Array<Blog> = [];

  // $ = stream
  private blogSubject = new BehaviorSubject<Blog[]>(this.blogSet);

  get blogs$() {
    // console.log(uuid());

    return this.blogSubject as Observable<Blog[]>;
  }

  addBlog(blog: Blog) {
    this.blogSet.push(blog);

    this.blogSubject.next(this.blogSet);
  }
}
