import { QueryEntity } from '@datorama/akita';
import { BlogsState, BlogsStore } from './add-blog.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogsQuery extends QueryEntity<BlogsState> {
  constructor(protected store: BlogsStore) {
    super(store);
  }
}
