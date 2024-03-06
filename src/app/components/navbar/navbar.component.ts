import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { BreakpointService } from '../../core/services/breakpoint.service';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  isOpenMenuBar = false;
  isMobile = false;

  constructor(private readonly _breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this._breakpointService.mediaBreakpoint$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(media => {
          this.isMobile = (media === 'xs' || media === 'sm' || media === 'md');
        })
      )
      .subscribe();
  }

}
