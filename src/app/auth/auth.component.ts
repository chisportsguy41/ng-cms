import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  user = new User();
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private usersService: UsersService,
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
      this.router.navigate(['/posts']);
    }
  }

  onSubmit(): void {
    this.usersService.logIn(this.user).subscribe(
      (response) => {
        this.response(response)
        console.log(response)
      }
    );
  }

}
