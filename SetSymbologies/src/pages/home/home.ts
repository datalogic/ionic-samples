import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare let scannerProperties : any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  symbologies : any = {};
  aztec : any = {};
  codabar : any = {};
  code128 : any = {};

  constructor(public navCtrl: NavController) {
  	scannerProperties.edit(
  		(data) => {
			this.symbologies =  JSON.parse(data);
			this.aztec = this.symbologies.aztec;
			this.codabar = this.symbologies.codabar;
			this.code128 = this.symbologies.code128;
  		},
  		(err) => {
  			alert(err);
  		});
  }s

  setSymbologies(){
	this.symbologies.aztec = this.aztec;
	this.symbologies.codabar = this.codabar;
	this.symbologies.code128 = this.code128;

	scannerProperties.store(
  		this.symbologies,
  		(data) => {
  			alert(data);
  		},
  		(err) => {
  			alert(err);
		}
	);
  }

}
