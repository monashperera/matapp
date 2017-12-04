import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestmessProvider } from '../../providers/testmess/testmess';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[TestmessProvider]
})
export class HomePage {
  public resData;

  constructor(public navCtrl: NavController, public testmessProvider:TestmessProvider) {
    testmessProvider.load()
    .then(data => {
      console.log(data);
      this.resData = data;

    })

  }

}
