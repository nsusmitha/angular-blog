import { Blog } from './../add-blogstate/add-blog.model';
import { AddBlogsService } from './../add-blogstate/add-blog.service';
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

  constructor(private addBlogService: AddBlogsService) {}

  ngOnInit() {
    this.blogs$ = this.addBlogService.blogs$;
  }
}
