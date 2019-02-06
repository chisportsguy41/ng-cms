import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  post: Post;
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.getPost(slug);
  }

  getPost(slug): void {
    this.postsService.getPost(slug).subscribe(
      (response:any) => this.post = response.post
    );
  }

  response(response): void {
    if(response.success===false){
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;
    }

    if(response.success===true) {
      this.router.navigate(['/posts/view/', response.post.slug]);
    }
  }

  onSubmit(): void {
    this.postsService.editPost(this.post).subscribe(
      (response) => {
        this.response(response)
      }
    );
  }

}
