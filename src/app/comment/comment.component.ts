import { Comment } from './../comment.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addComment() {
    const comment: Comment = {
      id: 'asdf',
      name: 'asdf',
    };

    // this.commentService.add(comment)
  }
}
