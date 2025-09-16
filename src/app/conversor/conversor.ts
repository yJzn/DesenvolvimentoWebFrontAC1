import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  standalone: false,
  templateUrl: './conversor.html',
  styleUrl: './conversor.css'
})
export class Conversor {
  celsius: number = 0;
  fahrenheit: number = 32;
  kelvin: number = 273.15;
  resultado1: number = 0;
  resultado2: number = 0;

  converterDeCelsius(): void {
    this.resultado1 = (this.celsius * 9/5) + 32;
    this.resultado2 = this.celsius + 273.15;
  }

}
