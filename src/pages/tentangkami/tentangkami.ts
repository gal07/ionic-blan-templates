import { ProcessProvider } from './../../providers/process/process';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login';
import {  } from "module";





/**
 * Generated class for the TentangkamiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tentangkami',
  templateUrl: 'tentangkami.html',
})
export class TentangkamiPage {
  
  /*attr*/
  attr:any;
  nama='';
  email='';

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public app:App,
  public afauth: AngularFireAuth,
  public RegisterProv: ProcessProvider,

  ) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TentangkamiPage');
  }

  logout(){
    this.afauth.auth.signOut().then((res)=>{
      localStorage.removeItem('userinfo')
      localStorage.removeItem('nis')
      localStorage.removeItem('role')
      setTimeout(() => this.app.getRootNav().setRoot(LoginPage), 1000);
    }).catch(err=>{
      alert(err.message)
    })
  }



}
