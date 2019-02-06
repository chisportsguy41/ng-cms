import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';
import { User } from '../users';
import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  user: User;
  posts: Post[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  getUser(id: string): void {
    this.usersService.getUser(id).subscribe(
      (response:any) => {
        this.user = response.user,
        this.getPosts(response.user._id)
      }
    );
  }

  deleteUser(id: string): void {
    if(confirm("Are you sure you want to delete " + this.user.username + "?")) {
      this.usersService.deleteUser(id).subscribe(
        ()=>{this.router.navigate(['/users'])}
      );
    }
  }

  getPosts(id: string): void {
    this.postsService.getPostsByUser(id).subscribe(
      (response:any) => {
        this.posts = response.posts,
        console.log(this.posts)
      }
    );
  }

}
