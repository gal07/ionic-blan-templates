import { ProfilePage } from './../profile/profile';
import { JadwalSiswaPage } from './../jadwal-siswa/jadwal-siswa';
import { Component } from '@angular/core';
import { JadwalPage } from './../jadwal/jadwal';
import { NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { TentangkamiPage } from './../tentangkami/tentangkami';
import { IndexGuruPage } from '../index-guru/index-guru';
import { IndexSiswaPage } from '../index-siswa/index-siswa';
import { Profile2Page } from '../profile2/profile2';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
  tab2Root:any;
  tab3Root:any;
  tab4Root:any;
  tab5Root:any;
  tab6Root:any;
  tab7Root:any;
  tab8Root:any;
  tab9Root:any;

  roles = null;

  constructor( public params: NavParams ) {
    let tt = this.params.get('data');
    if (tt.role == 1) {
      this.tab2Root = HomePage;
      this.tab3Root = JadwalPage;
      this.tab6Root = TentangkamiPage;
      this.roles = tt.role
    }else if(tt.role == 2){
      this.tab2Root = HomePage;
      this.tab5Root = JadwalSiswaPage;
      this.tab7Root = IndexSiswaPage;
      this.tab8Root = ProfilePage;
      this.roles = tt.role
    }else if(tt.role == 3){
      this.tab2Root = HomePage;
      this.tab5Root = JadwalSiswaPage;
      this.tab7Root = IndexSiswaPage;
      this.tab9Root = Profile2Page;
      this.roles = tt.role
    }


  }
}
