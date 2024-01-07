import { UppercasePipeComponent } from './../components/uppercase-pipe/uppercase-pipe.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CurrencyPipeComponent } from '../components/currency-pipe/currency-pipe.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import localeEn from '@angular/common/locales/en';


registerLocaleData(localeTr, 'tr');

registerLocaleData(localeEn, 'en');registerLocaleData(localeTr, 'tr');

registerLocaleData(localeEn, 'en');

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink]
})
export class AppComponent {
  title = 'AngularDefaultPipes';
}


