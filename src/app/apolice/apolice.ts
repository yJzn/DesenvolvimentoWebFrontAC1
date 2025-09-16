import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  standalone: false,
  templateUrl: './apolice.html',
  styleUrl: './apolice.css'
})
export class Apolice {
  nome: string = "";
  idade: number = 0
  valor: number = 0;
  sexo: string = "";
  valorFinal: number = 0;
  apolice: number = 0;

  calcularValor(): void {
    if (this.sexo === 'F') {
      this.valorFinal = 0.8;
    } else if (this.idade <= 25 && this.sexo === 'M') {
      this.valorFinal = 1.5; 
    } else if (this.idade > 25 && this.sexo === 'M') {
      this.valorFinal = 1.0;
  }
  this.apolice = this.valor * this.valorFinal;
}}
