import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter, Router } from '@angular/router';
import { of } from 'rxjs';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { getSportOffer } from '../../data/sports.data';
import { SportDetailPage } from './sport-detail-page';

function activatedRouteWithSportId(sportId: string) {
  const paramMap = convertToParamMap({ sportId });

  return {
    snapshot: { paramMap },
    paramMap: of(paramMap)
  };
}

describe('SportDetailPage', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
    vi.restoreAllMocks();
  });

  it('rendert die Detaildaten des Sportangebots aus dem zentralen Data Layer', async () => {
    const sport = getSportOffer('fussball');

    await TestBed.configureTestingModule({
      imports: [SportDetailPage],
      providers: [
        provideRouter([]),
        { provide: ActivatedRoute, useValue: activatedRouteWithSportId('fussball') }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(SportDetailPage);
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;
    const image = fixture.nativeElement.querySelector('.sport-hero img') as HTMLImageElement | null;

    expect(text).toContain(sport?.name);
    expect(text).toContain(sport?.teaser);
    expect(fixture.nativeElement.querySelectorAll('.sport-section')).toHaveLength(sport?.sections.length ?? 0);
    expect(image?.getAttribute('src')).toBe(sport?.heroImage);
  });

  it('leitet unbekannte Sportangebote zur Uebersicht zurueck', async () => {
    const navigateByUrl = vi.fn();

    await TestBed.configureTestingModule({
      imports: [SportDetailPage],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteWithSportId('unbekannt') },
        { provide: Router, useValue: { navigateByUrl } }
      ]
    }).compileComponents();

    TestBed.createComponent(SportDetailPage);

    expect(navigateByUrl).toHaveBeenCalledWith('/sportangebote');
  });
});
