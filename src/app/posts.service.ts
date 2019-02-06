import { Injectable } from '@angular/core';
//1. Import HTTP libs for API calls
import { HttpClient, HttpHeaders } from '@angular/common/http';

//2. Import Observable
import { Observable } from 'rxjs';

//3. Import the User object
import { Post } from './post';

//3. Set outbound HTTP headers to JSON
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url: string = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  getPost(slug: string): Observable<Post> {
    return this.http.get<Post>(`${this.url}/${slug}`);
  }

  getPostsByUser(id: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/byUser/${id}`);
  }

  createPost (post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post, httpOptions);
  }

  editPost (post: Post): Observable<Post> {
    return this.http.put<Post>(this.url, post, httpOptions);
  }

  deletePost (id: string): Observable<Post> {
    return this.http.delete<Post>(`${this.url}/${id}`);
  }

}
