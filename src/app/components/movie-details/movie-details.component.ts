import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

import { MovieInfos } from '../../models/MovieInfos';

import { MovieDetailsService } from '../../services/movie-details.service';
import { SaveLinkPipe } from '../../save-link.pipe';

import { ActivatedRoute } from '@angular/router';
import {Http, Response} from '@angular/http'
import 'rxjs/Rx';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  private specificMovie: MovieInfos;
  private videoUrl: SafeResourceUrl;
  private isCliked: boolean = false;
  private isLogedin: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private movieDetailsService: MovieDetailsService,
    private sanitizer: DomSanitizer) {};
    private isActive: boolean = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = Number.parseInt(params['movieID']);
      this.movieDetailsService.getSpecificMovie(id)
        .do(val => console.log(val))
        .subscribe(val => {
          this.specificMovie = val;});
    });
  }

  private updateVideoUrl(url: string) {
      let dangerousVideoUrl = url;
      this.isCliked = this.toggle(this.isCliked);
      this.videoUrl =
          this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);

    }

//   updateVideoUrl2(id: string) {
//
//   let dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
//   this.videoUrl =
//       this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
// }


private checkFirstDivElement(i: number): boolean {
  if (i === 0) {
    this.isActive = true;
  }
  else this.isActive = false;

  return this.isActive;
}

private toggle(value: boolean): boolean {
  return value = !value;
}

}
