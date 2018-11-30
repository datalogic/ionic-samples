import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 
  
  @ViewChild('barcodeData') barcodeData: ElementRef;
  @ViewChild('barcodeType') barcodeType: ElementRef;

  constructor(public navCtrl: NavController, public events: Events) {
  	events.subscribe('data:received', (data) => {
	
	   this.barcodeData.nativeElement.innerText = data.barcodeData;
  	   this.barcodeData.nativeElement.style.cssText = "color : #45f713; font-size : large; font-weight : bold ";
  	   this.barcodeType.nativeElement.innerHTML = "<b> Barcode Type </b>: " + data.barcodeType;
  	});

  }
 
}
