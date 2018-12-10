import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare let keyboardManager : any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  triggers:{id: number, name: string, enabled: boolean}[]  = []; //an array os supported triggers	

  constructor(public navCtrl: NavController) {
  	keyboardManager.getAllAvailableTriggers(
  		(data) => {

  			//var obj = data.triggers;
  			this.triggers = JSON.parse(data).triggers;

  			//alert(arr.length);
  			// var arr = data.triggers;
  			// for(var i=0; i<arr.length; i++){
  			// 	this.triggers.push(arr[i]);
  			// }
  			//alert(this.triggers);
  		},
  		(err) => {
  			alert(err);
  		});
  }

  getAllAvailableTriggers(){

  	keyboardManager.getAllAvailableTriggers(
  		(data) => {
  			alert(JSON.parse(data).triggers);
  		},
  		(err) => {
  			alert(err);
  		});
  }

  setAllAvailableTriggers(enable){
  	keyboardManager.setAllAvailableTriggers(
  		enable,
  		(data) => {
  			alert(data);
  			//update the local data structure
  			for(var i=0; i<this.triggers.length; i++){
  				this.triggers[i].enabled = enable;
  			}
  		},
  		(err) => {
  			alert(err);
  		});
  }

  setTriggers(){
  	keyboardManager.setTriggers(
  		this.triggers,
  		(data) => {
  			alert(data);
  		},
  		(err) => {
  			alert(err);
  		});
  }

}
