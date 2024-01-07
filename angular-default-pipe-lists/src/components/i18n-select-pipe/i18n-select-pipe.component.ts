import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-select-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './i18n-select-pipe.component.html',
  styleUrl: './i18n-select-pipe.component.scss'
})
export class I18nSelectPipeComponent {
  userType: string = 'guest'; 
  kullanici: string='misafir';

  welcomeMessages = {
    'student': 'welcome to student',
    'teacher': 'welcome to teacher',
    'guest': 'welcome to guest',
  }
  hosgeldinmesajlari = {
    'Öğrenci': 'Hoşgeldin Öğrenci',
    'Öğretmen': 'Hoşgeldin Öğretmen',
    'Misafir': 'Hoşgeldin Misafir',
  }

  setUserType(type: string): void {
    this.userType = type;
  }
  setKullanici(type:string): void{
    this.kullanici = type;
  }
}