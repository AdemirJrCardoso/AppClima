import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { BuscaCidadePage } from './busca-cidade';

@NgModule({
  declarations: [
    BuscaCidadePage,
  ],
  imports: [
    IonicPageModule.forChild(BuscaCidadePage),
    ComponentsModule
  ],
})
export class BuscaCidadePageModule {}
