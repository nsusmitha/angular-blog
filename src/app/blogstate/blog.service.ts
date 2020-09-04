import { BlogsStore } from './blog.store';
import { Blog } from './blog.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
interface AddBlog {
  title: string;
  content: string;
}
@Injectable({
  providedIn: 'root',
})
export class AddBlogService {
  private blogSet: Array<Blog> = [];
  constructor(private blogsStore: BlogsStore) {}
  // $ = stream
  private blogSubject = new BehaviorSubject<Blog[]>(this.blogSet);

  get blogs$() {
    // console.log(uuid());

    return this.blogSubject as Observable<Blog[]>;
  }

  addBlog(blog: AddBlog) {
    //this.blogSet.push(blog);
    const myBlog: Blog = {
      id: uuid(),
      title: blog.title,
      content: blog.content,
      //comments: this.commentId,
    };
    console.log(blog.title);
    console.log(myBlog.title);
    this.blogsStore.add(myBlog);
    // this.blogSubject.next(this.blogSet);
  }
}
