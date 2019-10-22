import { Component, OnInit } from '@angular/core';
import { Hero, Alias } from './models';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'grid-sample';
  heroes: Hero[];
  aliases: Alias[];

  constructor(private service: HeroService) {}

  ngOnInit(): void {
    this.service.getHeroes().subscribe(
      heroes => {
       this.heroes = heroes;
      },
      err => console.log(JSON.stringify(err))
    );
  }

  handleEditingStart(id: number) {
    this.service.getHero(id).subscribe(
      hero => {
        this.aliases = hero.aliases;
      },
      err => console.log(JSON.stringify(err))
    );
  }

  logFilterBuilderText(e: any): void {
    console.log(e.component);
  }
}
