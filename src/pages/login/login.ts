import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TabsPage } from './../tabs/tabs';
import { HomePage } from './../home/home';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from "../../model/user";
import { ProcessProvider } from './../../providers/process/process';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

   /* Attribut NGMODEL */  
  email='';
  password='';


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afauth: AngularFireAuth,
    public processProv:ProcessProvider
    ) {
  }

  ionViewWillEnter(){
    this.afauth.auth.onAuthStateChanged((user)=>{
      if(user){
        console.log('ada')
        localStorage.setItem('userinfo',JSON.stringify(user))
        let roles = JSON.parse(localStorage.getItem('role'))
        this.navCtrl.setRoot(TabsPage,{data:{role:roles}})
      }else{
        console.log('tidak ada')
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(){
    
        /* Check Email apakah email terdapat pada guru_uid */
    this.processProv.check_guru_uid(this.email).subscribe(data=>{
      if (data.length == 1) {
       /* Jika email yang diberikan , ditemukan di dalam database akan dilanjutkan */
       this.afauth.auth.signInWithEmailAndPassword(this.email,this.password).then((res)=>{

        this.afauth.auth.onAuthStateChanged((user)=>{
          if(user){
            localStorage.setItem('userinfo',JSON.stringify(user))
            console.log('ada')
         }else{
            console.log('tidak ada')
          }
        })

        this.navCtrl.push(TabsPage,{data:{role:1}})
        let roles = 1;
        localStorage.setItem('role',JSON.stringify(roles))
      }).catch(error=>{
       
        alert(error.message)
      })
      }
      else {

        /* Check Email apakah email terdapat pada siswa_uid */
        this.processProv.check_siswa_uid(this.email).subscribe(data=>{

          if (data.length == 1) {

              /* Jika email yang diberikan , ditemukan di dalam database akan dilanjutkan */
              this.afauth.auth.signInWithEmailAndPassword(this.email,this.password).then((res)=>{
                this.navCtrl.push(TabsPage,{data:{role:2}})
                let roles = 2;
                localStorage.setItem('role',JSON.stringify(roles))
              }).catch(error=>{
              
                alert(error.message)
              })
            
          }else{

            /* Check Email apakah email terdapat pada orangtua_uid */
            this.processProv.check_orangtua_uid(this.email).subscribe(data=>{

              if (data.length == 1) {

                   /* Jika email yang diberikan , ditemukan di dalam database akan dilanjutkan */
                  this.afauth.auth.signInWithEmailAndPassword(this.email,this.password).then((res)=>{
                    this.navCtrl.push(TabsPage,{data:{role:3}})
                    let roles = 3;
                    localStorage.setItem('role',JSON.stringify(roles))
                  }).catch(error=>{
                    alert(error.message)
                  })
                
              }else{

                  /* Jika email yang diberikan tidak ditemukan */
                  alert('Email Tidak Ditemukan')


              }

            })

          }

        })

      }
    })

  
  }
}