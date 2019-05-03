import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare let scannerProperties : any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  properties : any = {};
  keyboardWedge : any = {};

  constructor(public navCtrl: NavController) {
  	scannerProperties.edit(
  		(data) => {
			this.properties =  JSON.parse(data);
			this.keyboardWedge = this.properties.keyboardWedge;
  		},
  		(err) => {
  			alert(err);
  		});
  }

  wedge(){
	this.properties.keyboardWedge = this.keyboardWedge;

	scannerProperties.store(
  		this.properties,
  		(data) => {
  			alert(data);
  		},
  		(err) => {
  			alert(err);
		}
	);
  }

}
