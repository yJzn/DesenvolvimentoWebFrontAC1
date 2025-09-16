import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { Media } from './media/media';
import { Apolice } from './apolice/apolice';
import { Conversor } from './conversor/conversor';
import { Imc } from './imc/imc';    

const routes: Routes = [
    {  path: '', redirectTo: '/media', pathMatch: 'full' },
    {  path: 'media', component: Media },
    {  path: 'apolice', component: Apolice },
    {  path: 'conversor', component: Conversor },
    {  path: 'imc', component: Imc }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
