import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <h1>Şart blogları</h1>
  @if(showFirstWord){
    <p style="color: {{ showFirstWord === true ? 'red' : '' }};">
      Birinci yazı {{ showFirstWord === true ? 'red' : '' }}
    </p>
  }@else if(showSecondWord){

  }@else {
    
  }

  @if(showSecondWord){
    <p style="color: green;">İkinci Yazı</p>
  }
   
  <hr>
  <button (click)="show(1)">Birinci yazıyı göster</button>
  <button (click)="show(2)">İkinci yazıyı göster</button>
  `
})
export class AppComponent {
  showFirstWord: boolean = false;
  showSecondWord: boolean = false;

  show(num: number) {
    if (num === 1) {
      this.showFirstWord = true;
      this.showSecondWord = false;
    } else {
      this.showFirstWord = false;
      this.showSecondWord = true;
    }

    switch (num) {
      case 1:
        this.showFirstWord = true;
        this.showSecondWord = false;
        break;

      case 2:
        this.showFirstWord = false;
        this.showSecondWord = true;
        break;
    }
  }
}
