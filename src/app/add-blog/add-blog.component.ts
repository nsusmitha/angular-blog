import { Blog } from './../blog';
import { AddBlogService } from './../add-blog.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  public blog: Blog;

  blogs$: Observable<Blog[]>;

  constructor(private addBlogService: AddBlogService) {
    this.blog = new Blog();
    this.blogs$ = addBlogService.blogs$;
  }

  addblog() {
    this.addBlogService.addBlog(this.blog);
  }

  ngOnInit() {}
}
