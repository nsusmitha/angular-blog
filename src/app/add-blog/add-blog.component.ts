
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
    //console.log(addblogForm.value);
    //console.log(this.blog);
   //console.log(this.blog.title);
   //console.log(this.blog.content);
   this.addBlogService.addBlog(this.blog);
  }
  //  addblog(title,content){
  //    console.log(title.value,content.value);
  //    alert("blog submitted")
  //  }
    //constructor(){}
    //blogs=[]
  ngOnInit():void {
     this.addblog();
  }
    //addblog(title:any, content){
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

