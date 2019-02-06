import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  post = new Post();
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  response(response): void {
    if(response.success===false) {
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;
    }

    if(response.success===true) {
      this.router.navigate(['/posts/view/', response.post.slug]);
    }
  }

  onSubmit(): void {
    this.postsService.createPost(this.post).subscribe(
      (response) => {
        this.response(response)
      }
    );
  }

}
