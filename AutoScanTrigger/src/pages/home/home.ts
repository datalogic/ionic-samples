import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare let autoScanTrigger : any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isAvailable : boolean = false;
  supportedRanges: {id: number, name: string}[] = []; //stores supported autoscan ranges
  currentRange: {id: number, name: string} = null;
  constructor(public navCtrl: NavController) {
  	//call the datalogic plugin to check if the device supports autoscan trigger
  	autoScanTrigger.isAvailable(
  		(data) => {
  			this.isAvailable = JSON.parse(data).available;
  			//alert(this.isAvailable);
  			if(this.isAvailable){
  				this.getSupportedRanges();
  				this.getCurrentRange();
  			}
  		},
  		(err) => {
  			alert(err);
  		});

  }

  getSupportedRanges(){
  	autoScanTrigger.getSupportedRanges(
  		(data) => {
  			//alert(JSON.parse(data).supportedRanges);
  			this.supportedRanges = JSON.parse(data).supportedRanges; //the array will be empty if device deos not support autoscan
  			// if(this.supportedRanges.length == 0)
  			// 	alert("Device does not support Auto Scan")
  		},
  		(err) => {
  			alert(err);
  		});
  }

  getCurrentRange(){
  	autoScanTrigger.getCurrentRange(
  		(data) => {
  			this.currentRange = JSON.parse(data).currentRange; //the array will be empty if device deos not support autoscan
  			// if( this.currentRange == null )
  			// 	alert("Device does not support Auto Scan")
  			// else
  			// 	alert(this.currentRange.name);	
  		},
  		(err) => {
  			alert(err);
  		});

  }

  setCurrentRange(id){
  	autoScanTrigger.setCurrentRange(
  		id,
  		(data) => {
  			//update the current range
  			this.getCurrentRange();
  			alert(data);
  		},
  		(err) => {
  			alert(err);
  		});
  }

}
