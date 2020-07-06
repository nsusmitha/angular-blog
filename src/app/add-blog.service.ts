//import { Observable,of } from 'rxjs';
import { Blog } from './blog';
import { Injectable } from '@angular/core';
//import { Subject }    from '../node_modules/rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class AddBlogService {
  blogSet : Array<Blog> = [];
  //public postAdded_Observable = new Subject();
addBlog(blog: Blog){
  // const blogData= JSON.parse(JSON.stringify(blog))
   this.blogSet.push(blog)
   console.log(JSON.stringify(this.blogSet))
    return this.blogSet;
  //id: blog.id,
  

}
getBlog()
{
  return this.blogSet;
}
  constructor() { }
}
