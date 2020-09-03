import { CommentsStore } from './comment.store';
import { Comment } from './comment.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
interface AddComment {
  blogId: string;
  name: string;
  message: string;
}
@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private commentSet: Array<Comment> = [];
  constructor(private commentsStore: CommentsStore) {}
  // $ = stream
  private commentSubject = new BehaviorSubject<Comment[]>(this.commentSet);

  get comments$() {
    // console.log(uuid());

    return this.commentSubject as Observable<Comment[]>;
  }

  addComment(comment: AddComment, blog: any) {
    const myComment: Comment = {
      id: uuid(),
      blogId: blog,
      name: comment.name,
      message: comment.message,
    };
    //console.log(blog.title);
    // console.log(myBlog.title);
    this.commentsStore.add(myComment);
    console.log(myComment.id);
    console.log(myComment.blogId);
  }
}
