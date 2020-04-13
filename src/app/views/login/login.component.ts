import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_core/_service/auth.service';
import { AlertifyService } from 'src/app/_core/_service/alertify.service';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertifyService: AlertifyService
  ) { }
    uri: any;
  ngOnInit() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.route.queryParams.subscribe(params => {
      this.uri = params.uri;
    });
  }
  ngAfterViewInit() {
    $('.login-content [data-toggle="flip"]').click(function() {
      $('.login-box').toggleClass('flipped');
      return false;
    });
  }
  login(): void {
    console.log(this.user);
    this.authService.login(this.user).subscribe(
      next => {
        this.alertifyService.success('Login Success!!');
      },
      error => {
        this.alertifyService.error('Login failed!!');
      },
      () => {
        this.checkRole();
      }
    );
  }

  checkRole() {
    debugger
    const uri = decodeURI(this.uri);
    if (uri !== 'undefined') {
      this.router.navigate([uri]);
    } else {
      this.router.navigate(['/record']);

    }
  }
}
