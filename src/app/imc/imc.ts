import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  standalone: false,
  templateUrl: './imc.html',
  styleUrl: './imc.css'
})
export class Imc {
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;

  calculoImc(): void {
    this.imc = this.peso / (this.altura * this.altura);
  }
}
