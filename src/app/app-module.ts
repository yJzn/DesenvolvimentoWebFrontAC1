import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuSuperior } from './menu-superior/menu-superior';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Media } from './media/media';
import { Apolice } from './apolice/apolice';
import { Conversor } from './conversor/conversor';
import { Imc } from './imc/imc';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    MenuSuperior,
    Media,
    Apolice,
    Conversor,
    Imc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
