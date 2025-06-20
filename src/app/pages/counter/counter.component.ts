import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
  template:`
  <h1>Contador {{ counter }} </h1>
  <h1>Contador con Signal {{ counterSignal() }} </h1>
  <button (click)="increaseBy(+1)" >+1</button>
  <button (click)="increaseBy(-1)" >-1</button>
  <button (click)="resetCounter()" >reset</button>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,




})
export class CounterPageComponent {

  counter = 10;
  counterSignal = signal(10);

  /**
   *
   */
  constructor() {
    // setInterval(() => {
    //   // this.counter+=1;
    //   this.counterSignal.update(c => c + 1);
    //   console.log('Tick');

    // }, 1000);

  }

    increaseBy(value: number) {
      this.counter+=value;
      this.counterSignal.update(c => c + value);
    }

    resetCounter() {
    this.counter = 10;
    this.counterSignal.set(10);
    }




  }// cierre final de la clase


