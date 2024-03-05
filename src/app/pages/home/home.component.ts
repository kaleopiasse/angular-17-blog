import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { AnimesService } from '../../core/services/animes.service';
import { tap } from 'rxjs';
import { TopAnimesResponse } from '../../core/types/animes.types';
import { PageTitleComponent } from '../../components/page-title/page-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, PageTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

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
