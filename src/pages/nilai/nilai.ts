import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProcessProvider} from './../../providers/process/process';


/**
 * Generated class for the NilaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nilai',
  templateUrl: 'nilai.html',
})
export class NilaiPage {
  jumlahnilai:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ProcessProvider: ProcessProvider,
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NilaiPage');
  }




}
