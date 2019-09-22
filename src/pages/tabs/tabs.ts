import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { UsersPage } from './../users/users';
import { NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = HomePage;
  tab3Root = UsersPage

  constructor( public params: NavParams ) {

  }
}
