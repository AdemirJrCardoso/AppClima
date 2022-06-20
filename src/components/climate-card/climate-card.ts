import { Component, Input } from '@angular/core';

/**
 * Generated class for the ClimateCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'climate-card',
  templateUrl: 'climate-card.html'
})
export class ClimateCardComponent {

  @Input("cityName") cityName: string
  @Input("weather") weather: string
  @Input("temp") temp: number

  constructor() {
    
  }

}
