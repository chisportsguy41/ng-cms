import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersService } from './users.service';
import { PostsService } from './posts.service';
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PostsComponent } from './posts/posts.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserViewComponent,
    UserCreateComponent,
    UserEditComponent,
    PostsComponent,
    PostViewComponent,
    PostCreateComponent,
    PostEditComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService, PostsService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
