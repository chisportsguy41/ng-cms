import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getPosts().subscribe(
      (response:any) => {
        this.posts = response.posts
      }
    );
  }

}
