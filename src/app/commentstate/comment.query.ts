import { QueryEntity } from '@datorama/akita';
import { CommentsState, CommentsStore } from './comment.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentsQuery extends QueryEntity<CommentsState> {
  constructor(protected commentsStore: CommentsStore) {
    super(commentsStore);
  }
}
