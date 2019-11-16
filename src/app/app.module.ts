import { ListSiswaPage } from './../pages/list-siswa/list-siswa';
import { IndexSiswaPage } from './../pages/index-siswa/index-siswa';
import { P1Page } from './../pages/p1/p1';
import { JadwaljumatPage } from './../pages/jadwaljumat/jadwaljumat';
import { JadwalkamisPage } from './../pages/jadwalkamis/jadwalkamis';
import { JadwalrabuPage } from './../pages/jadwalrabu/jadwalrabu';
import { JadwalselasaPage } from './../pages/jadwalselasa/jadwalselasa';
import { JadwalseninPage } from './../pages/jadwalsenin/jadwalsenin';
import { JadwalSiswaPage } from './../pages/jadwal-siswa/jadwal-siswa';
import { JjumatPage } from './../pages/jjumat/jjumat';
import { JkamisPage } from './../pages/jkamis/jkamis';
import { JrabuPage } from './../pages/jrabu/jrabu';
import { ListStudentPage } from './../pages/list-student/list-student';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AngularFireModule } from '@angular/fire';0
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from './../pages/users/users';
import { LoginPage } from './../pages/login/login';
import { TabsPage } from './../pages/tabs/tabs';
import { NilaiPage } from './../pages/nilai/nilai';
import { AbsenPage } from './../pages/absen/absen';

import { LihatnilaiPage } from './../pages/lihatnilai/lihatnilai';
import { PengumumanPage } from './../pages/pengumuman/pengumuman';
import { LihatabsenPage } from './../pages/lihatabsen/lihatabsen';
import { TentangkamiPage } from '../pages/tentangkami/tentangkami';
import { MenunilaiPage } from '../pages/menunilai/menunilai';
import { MenuabsenPage } from '../pages/menuabsen/menuabsen';
import { JseninPage } from '../pages/jsenin/jsenin';
import { MatapelajaranPage } from '../pages/matapelajaran/matapelajaran';
import { Matapelajaran2Page } from '../pages/matapelajaran2/matapelajaran2';
import { JselasaPage } from '../pages/jselasa/jselasa';
import { ProcessProvider } from '../providers/process/process';
import { RegisterProvider } from '../providers/register/register';
import { IndexGuruPage } from '../pages/index-guru/index-guru';
import { JadwalPage } from '../pages/jadwal/jadwal';
import { DetailPage } from '../pages/detail/detail';

export const firebaseConfig = {
  apiKey: "AIzaSyAJE9m71VzWlAFtNNWZPHGecUO6C3I1V4o",
  authDomain: "fir-ionic-b5385.firebaseapp.com",
  databaseURL: "https://fir-ionic-b5385.firebaseio.com",
  projectId: "fir-ionic-b5385",
  storageBucket: "fir-ionic-b5385.appspot.com",
  messagingSenderId: "451218025408",
  appId: "1:451218025408:web:aea81b3258423ee1cfb625",
  measurementId: "G-HGF86S0CT2"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    LoginPage,
    TabsPage,
    NilaiPage,
    AbsenPage,
    JadwalPage,
    LihatnilaiPage,
    PengumumanPage,
    LihatabsenPage,
    TentangkamiPage,
    MenunilaiPage,
    MenuabsenPage,
    JseninPage,
    MatapelajaranPage,
    Matapelajaran2Page,
    JselasaPage,
    IndexGuruPage,
    ListStudentPage,
    JrabuPage,
    JkamisPage,
    JjumatPage,
    JadwalSiswaPage,
    JadwalseninPage,
    JadwalselasaPage,
    JadwalrabuPage,
    JadwalkamisPage,
    JadwaljumatPage,
    P1Page,
    IndexSiswaPage,
    DetailPage,
    ListSiswaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    LoginPage,
    TabsPage,
    NilaiPage,
    AbsenPage,
    JadwalPage,
    LihatnilaiPage,
    PengumumanPage,
    LihatabsenPage,
    TentangkamiPage,
    MenuabsenPage,
    MenunilaiPage,
    JseninPage,
    MatapelajaranPage,
    Matapelajaran2Page,
    JselasaPage,
    IndexGuruPage,
    ListStudentPage,
    JrabuPage,
    JkamisPage,
    JjumatPage,
    JadwalSiswaPage,
    JadwalseninPage,
    JadwalselasaPage,
    JadwalrabuPage,
    JadwalkamisPage,
    JadwaljumatPage,
    P1Page,
    IndexSiswaPage,
    DetailPage,
    ListSiswaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProcessProvider,
    RegisterProvider
  ]
})
export class AppModule {}
