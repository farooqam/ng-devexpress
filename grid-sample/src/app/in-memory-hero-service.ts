import { InMemoryDbService } from 'angular-in-memory-web-api';
import { of } from 'rxjs';

export class InMemoryHeroService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Windstorm', aliases: [{name: 'Blast', lastUsed: '10/18/2019'}, {name: 'Trubador', lastUsed: '06/04/2016'}] },
      { id: 2, name: 'Bombasto', aliases: [{name: 'Pokey', lastUsed: '1/3/2011'}, {name: 'Fantastico', lastUsed: '09/25/2019'}] },
      { id: 3, name: 'Magneta', aliases: [{name: 'Mr. X', lastUsed: '12/22/2018'}, {name: 'Bluestreak', lastUsed: '03/14/2002'}] },
      { id: 4, name: 'Tornado', aliases: [{name: 'Stormo', lastUsed: '09/01/2003'}] }
    ];

    const db = {heroes};
    return of(db);
  }
}
