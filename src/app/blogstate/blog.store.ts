import { Blog } from './blog.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface BlogsState extends EntityState<Blog, string> {}

@StoreConfig({ name: 'blogs' })
@Injectable({
  providedIn: 'root',
})
export class BlogsStore extends EntityStore<BlogsState> {
  constructor() {
    super();
  }
}
