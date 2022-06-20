import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CoordenadaProvider } from '../../providers/coordenada/coordenada';

/**
 * Generated class for the BuscaCidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busca-cidade',
  templateUrl: 'busca-cidade.html',
})
export class BuscaCidadePage {

  cidadeForm: FormGroup;
  apiData:any


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private coordenadaProvider: CoordenadaProvider,
    private toastCtrl: ToastController
  ) {
    this.cidadeForm = this.formBuilder.group({
      cidade: ["Sombrio", [Validators.required, Validators.minLength(3)]]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscaCidadePage');
  }

  buscaCidade() {
    const city = this.cidadeForm.value.cidade
    this.coordenadaProvider.getClimateByName(city)
      .then(response => {
        console.log(response)
        this.apiData = response
      })
      .catch(error => {
        this.coordenadaProvider.showMessage(error)
      })
  }
}
