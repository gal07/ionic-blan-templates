import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  } from 'ionic-angular';
import { NilaiPage } from '../nilai/nilai';
import { AlertController } from 'ionic-angular';
import { ProcessProvider } from './../../providers/process/process';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Data_siswa_running } from './../../model/data_siswa_running';


/**
 * Generated class for the ListSiswaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-siswa',
  templateUrl: 'list-siswa.html',
})
export class ListSiswaPage {

  attr:any;
  testCheckboxOpen: boolean;
  testCheckboxResult;
  template:any;
  kodemapels:any;

    /* Document */
    private siswadetail: AngularFirestoreDocument<Data_siswa_running>;
    items_siswadetail: Observable<Data_siswa_running>;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl:AlertController,
    public process:ProcessProvider,
    public afauth: AngularFireAuth,
    private afs:AngularFirestore,


    ) {
      this.process.getNissiswa().subscribe(data =>{
        console.log(data)
        this.template = data
      })

      let mapel = this.navParams.get('data')
      this.kodemapels = mapel.replace(" ","_").toLowerCase()
      console.log(this.kodemapels)
      
  }

  ionViewWillEnter(){
    let nis = JSON.parse(localStorage.getItem(''))
    console.log(nis)
    // this.process.getNissiswa(nis.nis).subscribe(data=>{
    //   console.log(data)
      // console.log(data[0])
      // this.attr = data[0]
      // localStorage.setItem('nis',this.attr.nis)
      // console.log(data)
    //})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListSiswaPage');
  }

  goNilai(key){
    this.navCtrl.push(NilaiPage,{data:{key:key,mapel:this.kodemapels}});
  }

  AlertShows(){
   
      const alert = this.alertCtrl.create({
        title: 'Absen Sudah Ada',
        subTitle: 'Tidak Bisa Mengubah Absen Yang Sudah Di isi',
        buttons: ['OK']
      });
      alert.present();
    
  }


  showAbsen(nama,key,mapel) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Apakah Siswa ini datang ke sekolah?');

    alert.addInput({
      type: 'checkbox',
      label: 'Hadir',
      value: 'hadir',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Sakit',
      value: 'sakit',
      checked: false
    });


    alert.addInput({
      type: 'checkbox',
      label: 'Izin',
      value: 'izin',
      checked: false
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Sakit',
      value: 'sakit',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Simpan',
      handler: data => {
        let adaabsen = null;
        let dates = new Date();
        let month = dates.getMonth()+1;
        let keysLog = dates.getDate()+'-'+month+'-'+dates.getFullYear()

        let totalPrevious = 0;
        this.siswadetail = this.afs.doc<Data_siswa_running>('data_siswa_running/'+key)
        this.items_siswadetail = this.siswadetail.valueChanges();
        
        this.items_siswadetail.subscribe(datas=>{
          // console.log(data)
          // console.log(datas.mapel[mapel].absensis[data])
        if(datas.mapel[mapel].absensis[data] === 0){
          totalPrevious = 1;
        }else{
          totalPrevious = datas.mapel[mapel].absensis[data] +1;
        }

        if (datas.mapel[mapel].log_absen[keysLog] != null) {
          this.AlertShows();
        }else{
          localStorage.setItem('totAbsen',JSON.stringify(totalPrevious))
          let datass ={
            "type":data[0],
            "key":key,
            "nama":nama,
            "mapel":mapel,
            "keylog":keysLog
          };
          this.process.absensiSiswa(datass)

        }

   
          
        })
      }
    });
    alert.present();
  }
}
