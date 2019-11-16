import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProcessProvider } from './../../providers/process/process';
import { AngularFireAuth } from '@angular/fire/auth';
import { NilaiPage } from '../nilai/nilai';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the IndexSiswaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index-siswa',
  templateUrl: 'index-siswa.html',
})
export class IndexSiswaPage {
  attr:any;
  template:any;
  nilai:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public process:ProcessProvider,
    public ProcessProvider:ProcessProvider,
    public afauth: AngularFireAuth
    
    ) {
    
      
  }

  ionViewWillEnter(){
    let email = JSON.parse(localStorage.getItem('userinfo'))
    this.process.getNisnByEmail(email.email).subscribe(data=>{
      console.log(data[0])
      this.attr = data[0]
      localStorage.setItem('nis',this.attr.nis)
    })

    this.ProcessProvider.getNilai().subscribe(data =>{
      console.log(data)
    })

    this.ProcessProvider.getMapel().subscribe(data =>{
      console.log(data)
      this.template = data
    })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexSiswaPage');
  }

  toDetail(mapels){
   this.navCtrl.push(DetailPage,{data:mapels}); 
  }

}
