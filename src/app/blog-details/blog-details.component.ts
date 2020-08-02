import { Blog } from './../blogstate/blog.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  @Input() blog: Blog;

  constructor() {}

  ngOnInit(): void {}
}
