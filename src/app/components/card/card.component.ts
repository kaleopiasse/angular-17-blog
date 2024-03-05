import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../../core/types/animes.types';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input() anime?: Anime;

  @Input() size: 'big' | 'medium' | 'small' = 'medium';

  @Input() index = 0;

  animeTitle = '';

  ngOnInit(): void {
    this.animeTitle = this.anime?.titles[0] ? this.anime.titles[0].title : 'Unknow';
  }
}
