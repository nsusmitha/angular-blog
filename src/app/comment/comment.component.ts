import { Comment } from './../commentstate/comment.model';
import { Component, OnInit, Input } from '@angular/core';
import { CommentsQuery } from '../commentstate/comment.query';
import { CommentsService } from './../commentstate/comment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  constructor(
    private commentsService: CommentsService,
    private commentsQuery: CommentsQuery
  ) {}

  ngOnInit(): void {}

  addComment() {
    const comment: Comment = {
      id: 'asdf',
      name: 'asdf',
    };

    // this.commentService.add(comment)
  }
}
