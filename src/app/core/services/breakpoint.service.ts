import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  public screenWidth$: BehaviorSubject<number>;
  public mediaBreakpoint$: BehaviorSubject<string>;

  constructor() {
    this.screenWidth$ = new BehaviorSubject(window.innerWidth);
    this.mediaBreakpoint$ = new BehaviorSubject(this._getMediaBreakpoint(window.innerWidth));
    this.init();
  }

  init() {
    this._setScreenWidth(window.innerWidth);
    this._setMediaBreakpoint(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(500),
        takeUntilDestroyed()
      ).subscribe((evt: any) => {
        this._setScreenWidth(evt.target.innerWidth);
        this._setMediaBreakpoint(evt.target.innerWidth);
      });
  }

  private _setScreenWidth(width: number): void {
    this.screenWidth$.next(width);
  }

  private _setMediaBreakpoint(width: number): void {
    this.mediaBreakpoint$.next(this._getMediaBreakpoint(width));
  }

  private _getMediaBreakpoint(width: number): string {
    if (width < 576) {
      return 'xs';
    } else if (width >= 576 && width < 768) {
      return 'sm';
    } else if (width >= 768 && width < 992) {
      return 'md';
    } else if (width >= 992 && width < 1200) {
      return 'lg';
    } else if (width >= 1200 && width < 1600) {
      return 'xl';
    } else {
      return 'xxl';
    }
  }
}
