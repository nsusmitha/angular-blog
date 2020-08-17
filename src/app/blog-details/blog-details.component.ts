import { Blog } from './../blogstate/blog.model';
import { Component, OnInit, Input } from '@angular/core';
import { BlogsQuery } from '../blogstate/blog.query';
import { AddBlogService } from './../blogstate/blog.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  @Input() blog: Blog;
  id: string = '';
  blog$: Observable<Blog>;
  public globalBlogID: string;
  constructor(
    private route: ActivatedRoute,
    private blogService: AddBlogService,
    private blogsQuery: BlogsQuery
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    //this.blog$ =this.blogsQuery.select(this.id);
  }
  assignBlog(blogID: string) {
    this.globalBlogID = blogID;
  }
}
