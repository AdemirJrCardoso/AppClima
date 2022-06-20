import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the CoordenadaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoordenadaProvider {

  constructor(
    public http: HttpClient,
    private toastCtrl: ToastController
  ) {
    console.log('Hello CoordenadaProvider Provider');
  }

  async getClimate(lat, lon) {
    try {
      const response: any = await this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bbd4f0cb4a5c7d4156f89123be8cbe92&lang=pt&units=metric`).toPromise()
      return {
        cityName: response.name,
        temperature: response.main.temp,
        weather: response.weather[0].description
      }
    } catch (error) {
      throw error.error.message
    }
  }

  async getClimateByName(city) {
    try {
      const response: any = await this.http.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=bbd4f0cb4a5c7d4156f89123be8cbe92`).toPromise()
      if (!response.length) {
        throw { error: { message: "Cidade Nao Encontrada" } }
      }
      const { lat, lon } = response[0]
      return this.getClimate(lat, lon)
    } catch (error) {
      console.log(error)
      throw error.error.message
    }
  }

  showMessage(message) {
    this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: "bottom"
    }).present()
  }

}