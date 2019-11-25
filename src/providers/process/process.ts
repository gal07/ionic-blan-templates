import { Data_siswa_running } from './../../model/data_siswa_running';
import { SiswaRunning } from './../../model/siswa_running';
import { Jadwal } from './../../model/jadwal';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable,Subject } from 'rxjs';
import { GuruUid } from './../../model/guruuid';
import { Guru_Running } from './../../model/guru_running';
import { Guru } from '../../model/guru';
import { Semester } from './../../model/semester';
import { map } from 'rxjs/operators';
import { Nilaisiswa } from '../../model/nilaisiswa';
import { Jadwalsiswa } from '../../model/jadwal-siswa';
import { Pengumuman } from '../../model/pengumuman';
import { Siswa } from '../../model/siswa';
import { Mapel } from '../../model/mapel';

/*
  Generated class for the ProcessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProcessProvider {

    /* Collection */
    private guruuid: AngularFirestoreCollection<GuruUid>;
    items_guruuid: Observable<GuruUid[]>;
  
    private guru_running: AngularFirestoreCollection<Guru_Running>;
    items_guru_running: Observable<Guru_Running[]>;
  
    private SemesterInterface: AngularFirestoreCollection<Semester>;
    items_semester: Observable<Semester[]>;
  
    private guruInterface: AngularFirestoreCollection<Guru>;
    items_guru: Observable<Guru[]>;
  
    private siswaRunninginterface: AngularFirestoreCollection<SiswaRunning>;
    items_siswarunning: Observable<SiswaRunning[]>;

    private jadwal_list: AngularFirestoreCollection<Jadwal>;
    items_item_jadwal: Observable<Jadwal[]>

    private nilaisiswa_list : AngularFirestoreCollection<Nilaisiswa>;
    items_item_nilaisiswa: Observable<Nilaisiswa[]>


    private jadwalsiswa_list : AngularFirestoreCollection<Jadwalsiswa>;
    items_item_jadwalsiswa: Observable<Jadwalsiswa[]>

    private pengumuman_list : AngularFirestoreCollection<Pengumuman>;
    items_item_pengumuman: Observable<Pengumuman[]>

    private siswaInterface: AngularFirestoreCollection<Siswa>;
    items_siswaiInterface: Observable<Siswa[]>;

    private nilai_list : AngularFirestoreCollection<Nilaisiswa>;
    items_item_nilai: Observable<Nilaisiswa[]>;

    private mapel_list : AngularFirestoreCollection<Mapel>;
    items_item_mapel: Observable<Mapel[]>;
  
    private dataInterface : AngularFirestoreCollection<Data_siswa_running>;
    items_dataInterface : Observable<Data_siswa_running[]>;

    /* Document */
    private siswa_running_detail: AngularFirestoreDocument<SiswaRunning>;
    doc_siswarunnin_detail: Observable<SiswaRunning>



  constructor(
    public http: HttpClient,
    public alertController: AlertController,
    private afs:AngularFirestore,
    public afauth:AngularFireAuth,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
  ) {
    console.log('Hello ProcessProvider Provider');
  }

   /**
   * Check Running Semester
   */
  checkRunning(){
    this.SemesterInterface = this.afs.collection<Semester>('data_semester',ref=>{
      return ref.where('status','==',1);
    });
    this.items_semester = this.SemesterInterface.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    );

    this.items_semester.subscribe(data=>{
      localStorage.setItem('semester',data[0].key)
    })
    
    return this.items_semester;

  }
  
  /**
 * get Guru UID
 */
getGuruUiD(){
    
  this.guruuid = this.afs.collection<GuruUid>('guru_uid');
  this.items_guruuid = this.guruuid.snapshotChanges().pipe(
    map(changes=>
      changes.map(c => ({key: c.payload.doc.id, ...c.payload.doc.data()}))
      )
  );

  return this.items_guruuid;
}

 /**
   * 
   * @param email 
   */
  getNipByEmail(email){
    this.guruInterface = this.afs.collection<Guru>('biodata_guru',ref=>{
      return ref.where('email','==',email)
    });
    this.items_guru = this.guruInterface.snapshotChanges().pipe(
      map(changes=>
        changes.map(c => ({key: c.payload.doc.id, ...c.payload.doc.data()}))
        )
    );
    return this.items_guru;
  }


  /**
   * 
   * @param email 
   */
  check_guru_uid(email){

    this.guruuid = this.afs.collection<GuruUid>('guru_uid',ref=>{
      return ref.where('email','==',email)
    });
    this.items_guruuid = this.guruuid.snapshotChanges().pipe(
      map(changes=>
        changes.map(c => ({key: c.payload.doc.id, ...c.payload.doc.data()}))
        )
    );
    return this.items_guruuid;
  }

    /**
   * 
   * @param email 
   */
  check_siswa_uid(email){

    this.guruuid = this.afs.collection<GuruUid>('siswa_uid',ref=>{
      return ref.where('email','==',email)
    });
    this.items_guruuid = this.guruuid.snapshotChanges().pipe(
      map(changes=>
        changes.map(c => ({key: c.payload.doc.id, ...c.payload.doc.data()}))
        )
    );
    return this.items_guruuid;

  }

    /**
   * 
   * @param email 
   */
  check_orangtua_uid(email){

    this.guruuid = this.afs.collection<GuruUid>('orangtua_uid',ref=>{
      return ref.where('email','==',email)
    });
    this.items_guruuid = this.guruuid.snapshotChanges().pipe(
      map(changes=>
        changes.map(c => ({key: c.payload.doc.id, ...c.payload.doc.data()}))
        )
    );
    return this.items_guruuid;

  }

  /**
   * 
   * @param nip 
   * @param semester 
   * semester adalah tahun ajaran yg sedang berjalan skrg
   */
  getMapelByNip(nip,semester){

    this.checkRunning();
    this.guru_running = this.afs.collection('data_semester').doc('/'+semester).collection('/guru',ref=>{
      return ref.where('id','==',nip)
    })
    this.items_guru_running = this.guru_running.snapshotChanges().pipe(
      map(changes=>
        changes.map(c => ({key: c.payload.doc.id, ...c.payload.doc.data()}))
        )
    );
    return this.items_guru_running;
  }


  /* buat nilai */
  createNilaisiswa(data){
      this.afs.collection<Nilaisiswa>('nilaisiswa').add(data).then(()=>{
        alert('Input Nilai Berhasil')
      }).catch(err=>{
          alert(err)
      })
  }


  /* get jadwal */

  getJadwal(){
    this.jadwal_list = this.afs.collection<Jadwal>('jadwal')
    this.items_item_jadwal = this.jadwal_list.snapshotChanges().pipe(
        map(changes=>
        changes.map(c => ({key: c.payload.doc.id, ...c.payload.doc.data()})) 
        )
    );
    return this.items_item_jadwal;
  }


    /* get jadwal-siswa */

    getJsiswa(){
      this.jadwalsiswa_list = this.afs.collection<Jadwalsiswa>('jadwal-siswa')
      this.items_item_jadwalsiswa = this.jadwalsiswa_list.snapshotChanges().pipe(
          map(changes=>
          changes.map(c => ({key: c.payload.doc.id, ...c.payload.doc.data()})) 
          )
      );
      return this.items_item_jadwalsiswa;
    }

        /* get pengumuman */

        getPengumuman(){
          this.pengumuman_list = this.afs.collection<Pengumuman>('pengumuman')
          this.items_item_pengumuman = this.pengumuman_list.snapshotChanges().pipe(
              map(changes=>
              changes.map(c => ({key: c.payload.doc.id, ...c.payload.doc.data()})) 
              )
          );
          return this.items_item_pengumuman;
        }

            /**
   * 
   * @param email 
   */
  getNisnByEmail(email){
    this.siswaInterface = this.afs.collection<Siswa>('biodata_siswa',ref=>{
      return ref.where('email','==',email)
    });
    this.items_siswaiInterface = this.siswaInterface.snapshotChanges().pipe(
      map(changes=>
        changes.map(c => ({key: c.payload.doc.id, ...c.payload.doc.data()}))
        )
    );
    return this.items_siswaiInterface;
  }


    /* get nilai */

    getNilai(){
      this.nilai_list = this.afs.collection<Nilaisiswa>('data_siswa_running')
      this.items_item_nilai = this.nilai_list.snapshotChanges().pipe(
          map(changes=>
          changes.map(c => ({key: c.payload.doc.id, ...c.payload.doc.data()})) 
          )
      );
      return this.items_item_nilai;
    }

    /* get mapel */

    getMapel(){
      this.mapel_list = this.afs.collection<Mapel>('data_mata_pelajaran')
      this.items_item_mapel = this.mapel_list.snapshotChanges().pipe(
          map(changes=>
          changes.map(c => ({key: c.payload.doc.id, ...c.payload.doc.data()})) 
          )
      );
      return this.items_item_mapel;
    }


    /**
   * 
   * 
   */
    /* get siswa */

    getNissiswa(){
      this.dataInterface = this.afs.collection<Data_siswa_running>('data_siswa_running')
      this.items_dataInterface = this.dataInterface.snapshotChanges().pipe(
        map(changes=>
          changes.map(c => ({key: c.payload.doc.id, ...c.payload.doc.data()}))
          )
      );
      return this.items_dataInterface;
    }

    /**
   * @param key
   * 
   */

    /* update nilai siswa */
    UpdateNilaiSiswa(key,nama,nilai){
      var Updates = {}
      Updates['mapel.'+nama+'.h1'] = nilai.h1;
      Updates['mapel.'+nama+'.h2'] = nilai.h2;
      Updates['mapel.'+nama+'.h3'] = nilai.h3;
      Updates['mapel.'+nama+'.uts'] = nilai.uts;
      Updates['mapel.'+nama+'.uas'] = nilai.uas;
    
    this.afs.collection('data_siswa_running').doc('/'+key).update(Updates).then(()=>{
      alert('Nilai Telah Disimpan')     
    }).catch(error=>{
      alert(error)
    });

  }



  /* update absen siswa */
  absensiSiswa(data){
    this.CreateLogAbsen(data.keylog,data.mapel,data.type,data.key)
    let TIME_IN_MS = 1500;
    let hideFooterTimeout = setTimeout( () => {
      alert(data.nama+' '+data.type)
          localStorage.removeItem('totAbsen');
    }, TIME_IN_MS);
    return false;
    // let Updates = {};
    // Updates['mapel.'+data.mapel+'.absensis.'+data.type] = Number(localStorage.getItem('totAbsen'));
    // this.afs.collection('data_siswa_running').doc('/'+data.key).update(Updates).then(()=>{
    //   alert(data.nama+' '+data.type)
    // }).catch(error=>{
    //   alert(error)
    // })

  }

  CreateLogAbsen(keylog,mapel,type,key){
    /* Create log */
    let logs = {}
    var b = keylog
    logs['mapel.'+mapel+'.log_absen.'+b] = type;
    this.afs.collection('data_siswa_running').doc('/'+key).update(logs)
    localStorage.removeItem('totAbsen')
  }


}
