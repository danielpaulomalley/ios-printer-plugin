import { Component } from '@angular/core';
import { IOSPrinterPlugin } from '../../../../dist/esm';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  printImage() {
    IOSPrinterPlugin.printImage("test")
  }
}
