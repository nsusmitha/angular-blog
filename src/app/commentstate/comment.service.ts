import { CommentsStore } from './comment.store';
import { Comment } from './comment.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
interface AddComment {
  title: string;
  content: string;
}
@Injectable({
  providedIn: 'root',
})
export class CommentsService {
 // private blogSet: Array<Blog> = [];
  constructor(private commentsStore: CommentsStore) {}
  // $ = stream
  //private blogSubject = new BehaviorSubject<Blog[]>(this.blogSet);

  //get blogs$() {
    // console.log(uuid());

    //return this.blogSubject as Observable<Blog[]>;
  }

  addComment(comment: AddComment) {
    //this.blogSet.push(blog);
    // const myBlog: Blog = {
    //   id: uuid(),
    //   title: blog.title,
    //   content: blog.content,
    // };
    // console.log(blog.title);
    // console.log(myBlog.title);
    // this.blogsStore.add(myBlog);
    // this.blogSubject.next(this.blogSet);
  }
}