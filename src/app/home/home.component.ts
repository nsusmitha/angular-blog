import { AddBlogService } from './../add-blog.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogs$: Observable<Blog[]>;

  constructor(private addBlogService: AddBlogService) {}

  ngOnInit() {
    this.blogs$ = this.addBlogService.blogs$;
  }
}
