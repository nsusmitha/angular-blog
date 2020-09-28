import { Comment } from './../commentstate/comment.model';
import { Blog } from './../blogstate/blog.model';
import { Component, OnInit, Input } from '@angular/core';
import { CommentsQuery } from '../commentstate/comment.query';
import { CommentsService } from './../commentstate/comment.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  public comment: Comment = {
    id: '',
    blogId: '',
    name: '',
    message: '',
  };
  @Input() blogId: string;
  id: string = '';
  comments$: Observable<Comment>;
  //public globalCommentID: string;
  constructor(
    private route: ActivatedRoute,
    private commentsService: CommentsService,
    private commentsQuery: CommentsQuery
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('this.id: ', this.id);
    this.comments$ = this.commentsQuery
      .selectEntity(this.id)
      .pipe(tap((value) => console.log('retrieved comment: ', value)));
  }

  addComment(blogId) {
    this.commentsService.addComment(this.comment, blogId);
  }
}
