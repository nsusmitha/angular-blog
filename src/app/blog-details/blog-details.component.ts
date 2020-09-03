import { Comment } from './../commentstate/comment.model';
import { Blog } from './../blogstate/blog.model';
import { Component, OnInit, Input } from '@angular/core';
import { BlogsQuery } from '../blogstate/blog.query';
import { AddBlogService } from './../blogstate/blog.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommentsService } from './../commentstate/comment.service';
import { CommentsQuery } from './../commentstate/comment.query';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  @Input() blog: Blog;
  @Input() comment: Comment;
  id: string = '';
  blog$: Observable<Blog>;
  comment$: Observable<Comment[]>;
  public globalBlogID: string;
  constructor(
    private route: ActivatedRoute,
    private blogService: AddBlogService,
    private blogsQuery: BlogsQuery,
    private commentsService: CommentsService,
    private commentsQuery: CommentsQuery
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('this.id: ', this.id);
    this.blog$ = this.blogsQuery
      .selectEntity(this.id)
      .pipe(tap((value) => console.log('retrieved blog: ', value)));
    // this.comment$ =
    // this.commentsQuery.selectAll().subscribe((Comment) => console.log(Comment));
    // this.comment$ = this.commentsQuery.selectAll();
    // console.log('comments' + this.comment$[0]);
  }

  assignBlog(blogID: string) {
    this.globalBlogID = blogID;
  }
}
