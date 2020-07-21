import { BlogsQuery } from './../add-blogstate/add-blog.query';
import { Blog } from './../add-blogstate/add-blog.model';
import { AddBlogsService } from './../add-blogstate/add-blog.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  // public blog: Blog;

  blogs$: Observable<Blog[]>;

  constructor(
    private addBlogsService: AddBlogsService,
    private Query: BlogsQuery
  ) {}

  ngOnInit() {
    this.blogs$ = this.BlogsQuery.selectAll() as Observable<Blog[]>;
  }
  addblog() {
    this.addBlogsService.addBlog(this.blog);
  }
}
