import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service'
import {NavController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  loginPostbody: any;

  constructor(private services: AllService,private navCtrl:NavController) {

    this.loginPostbody = {
      domain: '',
      username: '',
      password: ''
    }

  }

  ngOnInit() {
  }


  auth(){
    console.log("Auth click");
   this.navCtrl.goRoot('/tabs');
   console.log(this.loginPostbody);

  }

}
