import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private MoviesMngOutletActive: boolean = false;
  private UsersMngOutletActive: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  defineMoviesMngOutlet() {
    this.MoviesMngOutletActive = true;
    if (this.UsersMngOutletActive === true) {
      this.UsersMngOutletActive = false;
    }
    this.router.navigateByUrl('/dashboard/(movies-management-outlet:movies-management)');
    //this.router.navigate(['/dashboard', { outlets: { 'movies-management-outlet': ['movies-management'] } }]);
  }

  defineUsersMngOutlet() {
    this.UsersMngOutletActive = true;
    if (this.MoviesMngOutletActive) {
      this.MoviesMngOutletActive = false;
    }
    this.router.navigateByUrl('/dashboard/(users-management-outlet:users-management)');
  }
}
