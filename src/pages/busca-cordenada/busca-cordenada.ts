import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoordenadaProvider } from '../../providers/coordenada/coordenada';

/**
 * Generated class for the BuscaCordenadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busca-cordenada',
  templateUrl: 'busca-cordenada.html',
  providers: [
    CoordenadaProvider
  ]
})
export class BuscaCordenadaPage {
  coordenadaForm: FormGroup;

 apiData:any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private coordenadaProvider: CoordenadaProvider,
  ) {
    this.coordenadaForm = this.formBuilder.group({
      latitude: ["", Validators.required],
      longitude: ["", Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscaCordenadaPage');
  }

  buscaCoordenada() {
    const { latitude, longitude } = this.coordenadaForm.value
    this.coordenadaProvider.getClimate(latitude, longitude).then(
      response => {
        console.log(response)
        this.apiData = response
      },
    ).catch(error => {
      this.coordenadaProvider.showMessage(error)
    })
  }
}
