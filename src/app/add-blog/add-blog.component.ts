import { BlogsQuery } from '../blogstate/blog.query';
import { Blog } from './../blogstate/blog.model';
import { AddBlogsService } from './../blogstate/blog.service';
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
    title: '',
    content: '',
  };

  blogs$: Observable<Blog[]>;

  constructor(
    private addBlogsService: AddBlogsService,
    private Query: BlogsQuery
  ) {}

  ngOnInit() {
    this.blogs$ = this.Query.selectAll() as Observable<Blog[]>;
  }
  addblog() {
    this.addBlogsService.addBlog(this.blog);
  }
}
