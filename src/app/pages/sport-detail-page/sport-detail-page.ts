import { Component, computed, inject } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { getSportOffer } from '../../data/sports.data';

@Component({
  selector: 'app-sport-detail-page',
  imports: [RouterLink],
  templateUrl: './sport-detail-page.html',
  styleUrl: './sport-detail-page.css',
})
export class SportDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly sportId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('sportId'))),
    { initialValue: this.route.snapshot.paramMap.get('sportId') },
  );

  readonly sport = computed(() => getSportOffer(this.sportId()));

  constructor() {
    if (!getSportOffer(this.route.snapshot.paramMap.get('sportId'))) {
      this.router.navigateByUrl('/sportangebote');
    }
  }
}
