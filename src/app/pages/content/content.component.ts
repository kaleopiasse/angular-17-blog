import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../../core/types/animes.types';
import { AnimesService } from '../../core/services/animes.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  @Input() anime?: Anime;
  animeTitle = '';
  animeId = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private readonly _animesService: AnimesService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.pipe(
      tap(params => {
        this.animeId = parseInt(params.get('id')!, 10);
        this._animesService.getAnime(this.animeId)
          .pipe(
            tap(res => {
              this.anime = res.data;
              this.animeTitle = this.anime?.titles[0] ? this.anime.titles[0].title : 'Unknow';
            })
          ).subscribe();
      })
    ).subscribe();
  }

}
