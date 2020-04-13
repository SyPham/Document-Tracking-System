import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_core/_service/alertify.service';
import { AuthService } from 'src/app/_core/_service/auth.service';
import { CalendarsService } from 'src/app/_core/_service/calendar.service';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private calendarsService: CalendarsService,
    private sanitizer: DomSanitizer,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    let a = $('[data-toggle="sidebar"]');
    $('[data-toggle="sidebar"]').click(function(event) {
      event.preventDefault();
      $('.app').toggleClass('sidenav-toggled');
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('Logged out');
    const uri = this.router.url;
    this.router.navigate(['login'], {queryParams: {uri}});

  }
}
