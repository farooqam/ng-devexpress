import { TestBed, async } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryHeroService } from './in-memory-hero-service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryHeroService)
    ],
    providers: [HeroService]
  });

    service = TestBed.get(HeroService);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('GETs the heroes', async(() => {
    service.getHeroes().subscribe(heroes => {
      expect(heroes.length).toBe(4);
    },
    err => fail(JSON.stringify(err)));
  }));

  it('GETs a hero by id', async(() => {
    const id = 2;
    service.getHero(id).subscribe(hero => {
      expect(hero.name).toBe('Bombasto');
    },
    err => fail(JSON.stringify(err)));
  }));

});
