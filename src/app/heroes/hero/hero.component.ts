import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public showHeroButton: boolean = true;
  public showAgeButton: boolean = true;
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
    this.name = 'spiderman';
    this.showHeroButton = false;
  }

  changeAge():void {
    this.age = 27;
    this.showAgeButton = false;
  }

  reset():void {
    this.name = 'ironman';
    this.age = 45;
    this.showHeroButton = true;
    this.showAgeButton = true;
  }

}
