import { Component, OnInit, Input } from '@angular/core';
import { Blog } from './../blog';

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
