import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {  } from "module";
import { AngularFireAuth } from '@angular/fire/auth';
import { ProcessProvider } from '../../providers/process/process';


/**
 * Generated class for the Profile2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile2',
  templateUrl: 'profile2.html',
})
export class Profile2Page {

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
    console.log('ionViewDidLoad Profile2Page');
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
