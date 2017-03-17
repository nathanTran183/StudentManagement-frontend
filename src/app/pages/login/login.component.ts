import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../../../../node_modules/admin-lte/plugins/iCheck/square/blue.css',
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {
  message: string;
  loading: boolean;
  constructor(private auth: AuthService, private router: Router) {
    this.message = '';
   }

  ngOnInit() {
  }

  login(username: string, password: string): void {
    this.loading = true;
    this.message = '';
    this.auth.login(username, password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['home']);
        } else {
          this.message = 'Username or password is incorrect';
          this.loading = false;
        }
      },
      error => {
          this.message = 'Username or password is incorrect';
          this.loading = false;
      });
  }
}
