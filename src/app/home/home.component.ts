import { Blog } from './../blogstate/blog.model';
import { AddBlogService } from './../blogstate/blog.service';
import { BlogsQuery } from './../blogstate/blog.query';
// import { AddBlogService } from './../add-blog.service';
import { Component, OnInit } from '@angular/core';
// import { Blog } from '../blog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogs$: Observable<Blog[]>;

  constructor(
    private addBlogService: AddBlogService,
    private blogsQuery: BlogsQuery
  ) {}

  ngOnInit() {
    // this.blogs$ = this.addBlogService.blogs$;
    console.log('This is here');
    //this.blogsQuery.selectAll().subscribe((blog) => console.log(blog));
    this.blogs$ = this.blogsQuery.selectAll();
  }

  getLink(blog: Blog): string {
    return `/blog-details/${blog.id}`;
  }
}
