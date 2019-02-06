import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.getPost(slug);
  }

  getPost(slug:string) {
    this.postsService.getPost(slug).subscribe(
      (response:any) => {
        this.post = response.post
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
