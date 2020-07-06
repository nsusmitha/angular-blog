
import { AddBlogService } from './../add-blog.service';
import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import {Blog} from '../blog';
//import { BLOGS } from '../mock-articles';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AddBlogService]
})
export class HomeComponent implements OnInit {
  // blogs=BLOGS;
  blogSetData : Array<Blog> = [];
  // selectedBlog: Blog;

// blog:Blog={
 // id:1,
  //title: 'first blog',
  //content: 'This is my first blog'

//};
  constructor(private addBlogService:AddBlogService) { }

  ngOnInit() {
    this.blogSetData = this.addBlogService.getBlog();
    if(this.blogSetData != null)
    console.log("inside home component"+this.blogSetData.length);
  }
//   onSelect(blog: Blog): void {
//     this.selectedBlog = blog;
// }
}