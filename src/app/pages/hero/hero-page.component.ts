import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal, Signal, WritableSignal } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: './hero-page.component.html',
    styleUrls: ['././hero-page.component.html'],
    imports: [UpperCasePipe],

})
export class HeroPageComponent {


  name:WritableSignal<string> = signal('Ironman');
  age: WritableSignal<number> = signal(45);

  heroDescription = computed( () => {
    const description = `${ this.name() } - ${ this.age() }`;
    return description;
  } );

  // getHeroDescription(){
  //   return `${this.name()} -  ${this.age()}`
  // }

  capitalizedName = computed( () => this.name().toUpperCase() );

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }

}
