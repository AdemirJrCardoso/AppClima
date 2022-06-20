import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { BuscaCordenadaPage } from './busca-cordenada';

@NgModule({
  declarations: [
    BuscaCordenadaPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscaCordenadaPage),
    ComponentsModule
  ],
})
export class BuscaCordenadaPageModule {}
