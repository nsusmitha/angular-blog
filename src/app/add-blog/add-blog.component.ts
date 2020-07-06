
import { Blog } from './../blog';
import { AddBlogService } from './../add-blog.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
  providers: [AddBlogService]
})
export class AddBlogComponent implements OnInit {
  public blog:Blog;
  constructor(private addBlogService:AddBlogService) {
  this.blog = new Blog();
 }
   addblog()
   {
   this.addBlogService.addBlog(this.blog);
  }
  
    //blogs=[]
 ngOnInit(){
     this.addblog();
  }
    //addblog(title, content){
     //let blog={"title": title.value,"content":content.value};
   // if(localStorage.getItem("blogs")){
  //     this.blogs=JSON.parse(localStorage.getItem("blogs"))
  //   }
  //   this.blogs.push(blog);
  //   localStorage.setItem("blogs",JSON.stringify(this.blogs))
  //  title.value="";
  //   content.value="";
  //   alert("blog submitted")
  // }
}

