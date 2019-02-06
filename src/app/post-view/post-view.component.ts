import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { PostsService } from '../posts.service';
import { Post } from '../post';
import { UsersService } from '../users.service';
import { User } from '../users';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  post: Post;
  author: User;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.getPost(slug);
  }

  getPost(slug:string) {
    this.postsService.getPost(slug).subscribe(
      (response:any) => {
        this.post = response.post,
        this.id = response.post.userID,
        this.getAuthor(this.id)
      }
    );
  }

  getAuthor(userID: string): void {
    this.usersService.getUser(userID).subscribe(
      (response:any) => {
        this.author = response.user,
        console.log(this.author)
      }
    );
  }

  deletePost(id: string): void {
    if(confirm("Are you sure you want to delete " + this.post.title + "?")) {
      this.postsService.deletePost(id).subscribe(
        ()=>{this.router.navigate(['/posts'])}
      );
    }
  }

}
