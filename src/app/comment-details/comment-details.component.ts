import { CommentsService } from './../commentstate/comment.service';
import { CommentsQuery } from './../commentstate/comment.query';
import { Comment } from './../commentstate/comment.model';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css'],
})
export class CommentDetailsComponent implements OnInit {
  //constructor() { }

  // ngOnInit(): void {
  //  }
  @Input() commentId: string;

  comment$: Observable<Comment>;

  constructor(private commentsQuery: CommentsQuery) {}

  ngOnInit(): void {
    console.log('this.commentId: ', this.commentId);
    this.comment$ = this.commentsQuery
      .selectEntity(this.commentId)
      .pipe(tap((value) => console.log('retrieved Comment: ', value)));
  }
}
