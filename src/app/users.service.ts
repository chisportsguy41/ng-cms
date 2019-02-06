import { Injectable } from '@angular/core';
//1. Import HTTP libs for API calls
import { HttpClient, HttpHeaders } from '@angular/common/http';

//2. Import Observable
import { Observable } from 'rxjs';

//3. Import the User object
import { User } from './users';

//3. Set outbound HTTP headers to JSON
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  //4. Set up the URL
  private urlUsers: string = 'http://localhost:3000/api/users';
  private urlLogIn: string = 'http://loc.mean.example.com/api/auth/login';

  //5. Call the HttpClient in the Constructor
  constructor(private http: HttpClient) { }

  //6. Set up a simple observable.
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.urlUsers}/${id}`);
  }

  createUser (user: User): Observable<User> {
    return this.http.post<User>(this.urlUsers, user, httpOptions);
  }

  editUser (user: User): Observable<User> {
    return this.http.put<User>(this.urlUsers, user, httpOptions);
  }

  deleteUser (id: string): Observable<User> {
    return this.http.delete<User>(`${this.urlUsers}/${id}`);
  }

  logIn(user: User): Observable<User> {
    return this.http.post<User>(this.urlLogIn, user, httpOptions);
  }

}
