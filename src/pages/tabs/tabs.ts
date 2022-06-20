import { Component } from '@angular/core';

import { BuscaCidadePage } from '../busca-cidade/busca-cidade';
import { BuscaCordenadaPage } from '../busca-cordenada/busca-cordenada';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BuscaCidadePage;
  tab2Root = BuscaCordenadaPage;

  constructor() {

  }
}
