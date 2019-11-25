import { Data_siswa_running } from './../../model/data_siswa_running';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProcessProvider} from './../../providers/process/process';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



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
  getdataparams:any;
  getdataValue:any;
  /* Document */
  private siswadetail: AngularFirestoreDocument<Data_siswa_running>;
  items_siswadetail: Observable<Data_siswa_running>;

  /*  Attribut */
  h1 = 0;
  h2 = 0;
  h3 = 0;
  uts = 0;
  uas = 0;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ProcessProvider: ProcessProvider,
    private afs:AngularFirestore,
    
    ) {
      this.getdataparams = this.navParams.get('data');
  }

  ionViewDidLoad() {
    this.siswadetail = this.afs.doc<Data_siswa_running>('data_siswa_running/'+this.getdataparams.key)
    this.items_siswadetail = this.siswadetail.valueChanges();

    this.items_siswadetail.subscribe(data=>{
      this.getdataValue = data
      this.h1 = this.getdataValue.mapel[this.getdataparams.mapel].h1
      this.h2 = this.getdataValue.mapel[this.getdataparams.mapel].h2
      this.h3 = this.getdataValue.mapel[this.getdataparams.mapel].h3
      this.uts = this.getdataValue.mapel[this.getdataparams.mapel].uts
      this.uas = this.getdataValue.mapel[this.getdataparams.mapel].uas
      console.log(this.getdataValue.mapel[this.getdataparams.mapel].h1)
    })

  }

  simpan(){
    let fin = {
    h1:Number(this.h1),
    h2:Number(this.h2),
    h3:Number(this.h3),
    uts:Number(this.uts),
    uas:Number(this.uas),
    }


    this.ProcessProvider.UpdateNilaiSiswa(this.getdataparams.key,this.getdataparams.mapel,fin);
    this.navCtrl.pop()
  }

    
}
