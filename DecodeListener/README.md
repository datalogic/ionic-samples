# DecodeListener

Sample Ionic app that uses `barcodeManager.addReadListener` to display barcode data on the screen.

## How it works

The app calls `barcodeManager.addReadListener` to register a callback function to be notified when a read event is triggered.

In [app.component.ts](src/app/app.component.ts), we first declare `barcodeManager`, which matches the `clobbers` tag defined in the [plugin.xml](https://github.com/datalogic/cordova-plugin-datalogic/blob/07c1587468445e84388ab97309f3f37f35b976d8/plugin.xml#L14) of the [cordova-plugin-datalogic](https://github.com/datalogic/cordova-plugin-datalogic) library. More information on the `clobbers` tag canb be found in the [Cordova reference docs](https://cordova.apache.org/docs/en/latest/plugin_ref/spec.html#clobbers).

```ts
declare let barcodeManager : any;
```

We then register the callback, and attach it to the `data:received` event.

```ts
barcodeManager.addReadListner(
   (data) => {
    this.events.publish('data:received', JSON.parse(data));
   },
   (err)=>{
     alert(err);
   }
);
```

and then in [home.ts](src/pages/home/home.ts), we use the `data:received` event data to update the `barcodeData` and `barcodeType` fields on our app's main page.

```ts
events.subscribe('data:received', (data) => {
   this.barcodeData.nativeElement.innerText = data.barcodeData;
   this.barcodeData.nativeElement.style.cssText =
     "color : #45f713; font-size : large; font-weight : bold ";
   this.barcodeType.nativeElement.innerHTML =
     "<b> Barcode Type </b>: " + data.barcodeType;
});
```

## Screenshot

![DecodeListener](screenshots/screenshot.gif)
