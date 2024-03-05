import { Component, OnInit } from '@angular/core';
import { ContentCardComponent } from '../content-card/content-card.component';
import { AnimesService } from '../../core/services/animes.service';
import { tap } from 'rxjs';
import { TopAnimesResponse } from '../../core/types/animes.types';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [ContentCardComponent],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.css',
})
export class HomeContentComponent implements OnInit {

  animes: TopAnimesResponse = {
    data : [],
    pagination: {
      has_next_page: false,
      last_visible_page: 0,
      items: {
        count: 0,
        per_page: 5,
        total: 0
      }
    }
  };

  constructor(private readonly animesService: AnimesService){}

  ngOnInit(): void {
    this.animesService.getTopAnimes()
      .pipe(
        tap(res => this.animes = res)
      ).subscribe();
  }

}
