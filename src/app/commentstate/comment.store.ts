import { Comment } from './comment.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface CommentsState extends EntityState<Comment, string> {}

@StoreConfig({ name: 'comments' })
@Injectable({
  providedIn: 'root',
})
export class CommentsStore extends EntityStore<CommentsState> {
  constructor() {
    super();
  }
}
