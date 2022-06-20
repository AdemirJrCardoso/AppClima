import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BuscaCidadePage } from '../pages/busca-cidade/busca-cidade';
import { BuscaCordenadaPage } from '../pages/busca-cordenada/busca-cordenada';
import { FormsModule } from '@angular/forms';
import { CoordenadaProvider } from '../providers/coordenada/coordenada';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    BuscaCidadePage,
    BuscaCordenadaPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpClientModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    BuscaCidadePage,
    BuscaCordenadaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoordenadaProvider
  ]
})
export class AppModule {}
