import { AddBlogService } from './add-blog.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBlogComponent,
    PagenotfoundComponent,
    CommentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
