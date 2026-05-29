import { Component, computed, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
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

  private readonly sportId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('sportId'))),
    { initialValue: this.route.snapshot.paramMap.get('sportId') },
  );

  readonly sport = computed(() => getSportOffer(this.sportId()));
}
