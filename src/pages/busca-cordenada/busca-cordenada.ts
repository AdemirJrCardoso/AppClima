import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
    private toastCtrl: ToastController
  ) {
    this.coordenadaForm = this.formBuilder.group({
      latitude: [-29.0979, Validators.required],
      longitude: [-49.6401, Validators.required]
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
