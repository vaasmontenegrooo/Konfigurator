import { Component } from '@angular/core';
import { COMPONENTS } from './mock-content';
import { NgForm } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public components;

  constructor() {
    this.components = COMPONENTS;
   }

   exportToFile(form: NgForm) {
    var content = 'Procesor: ' + form.value.procesor + '\n Płyta główna: ' + form.value.plyta_glowna + '\n Karta graficzna: ' + form.value.karty_graficzne +
     '\n Zasilacz: ' + form.value.zasilacz + '\n Pamięć RAM: ' + form.value.ilosc_ram + ' ' + form.value.ram + '\n Dysk HDD: ' + form.value.dysk_hdd + 
     '\n Dysk SSD: ' + form.value.dysk_ssd + '\n Chłodzenie procesora: ' + form.value.chlodzenie;
    var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "konfiguracja.txt");
  }
  
  ngOnInit() {
    
  }
}
