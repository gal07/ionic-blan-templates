import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NilaiPage } from '../nilai/nilai';
import { AlertController } from 'ionic-angular';
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

  testCheckboxOpen: boolean;
  testCheckboxResult;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl:AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListSiswaPage');
  }

  goNilai(){
    this.navCtrl.push(NilaiPage);
  }


  showAbsen() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Apakah Siswa ini datang ke sekolah?');

    alert.addInput({
      type: 'checkbox',
      label: 'Hadir',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Sakit',
      value: 'value2'
    });


    alert.addInput({
      type: 'checkbox',
      label: 'Izin',
      value: 'value3'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Sakit',
      value: 'value4'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Simpan',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }
}
