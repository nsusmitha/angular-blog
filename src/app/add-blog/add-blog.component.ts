import { BlogsQuery } from '../blogstate/blog.query';
import { Blog } from './../blogstate/blog.model';
import { AddBlogService } from './../blogstate/blog.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  public blog: Blog = {
    id: '',
    title: '',
    content: '',
  };

  blogs$: Observable<Blog[]>;

  constructor(
    private blogService: AddBlogService,
    private blogsQuery: BlogsQuery
  ) {}

  ngOnInit() {
    //this.blogs$ = this.blogsQuery.selectAll() as Observable<Blog[]>;
    this.blogs$ = this.blogsQuery.selectAll();
  }
  addblog() {
    this.blogService.addBlog(this.blog);
  }
}
