import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare let ledManager : any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ledList: {led: string, name: string, enable: boolean}[] = [
  	{"led": "LED_GOOD_READ", "name": "Good read LED", "enable": false},
  	{"led": "LED_GREEN_SPOT", "name": "Green Spot LED", "enable": false},
  	{"led": "LED_NOTIFICATION", "name": "General Notification LED", "enable": false}

  ]; 		

  constructor(public navCtrl: NavController) {

  }

  setLed(i){
  	ledManager.setLed(
  		this.ledList[i],
  		(data) => {
  			alert(data);
  		},
  		(err) => {
  			alert(err);
  		}
  		);
  }

}
