import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular'
import {Md5} from 'ts-md5'
import { AlertController } from '@ionic/angular';
import {StorageService} from '../services/storage.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: String; 
  public password: string
  public token: any
  constructor(public apollo: Apollo, public alertController: AlertController, public storage: StorageService, private router: Router) { }

  async login(){

    var query = gql`query login($user: UserInput){
      login(user: $user)
    }`;

    var user = {
      "user":{
        username: this.username, 
        password: Md5.hashStr(this.password)
      }
    }
    await this.apollo.watchQuery({
      query: query, 
      variables: user
    }).valueChanges
    .subscribe( data => {
      this.token =  data.data;
      console.log(this.token.login)
      this.me(this.token.login)
    })
  }

  async me(token){

    var query = gql`query me($token: String){
      get_user(token: $token){
        username,
        name,
        apellido
      }
    }`
    await this.apollo.watchQuery({
      query: query, 
      variables : { "token": token}
    }).valueChanges
    .subscribe( data => {
      var d: any = data.data
      if(d.get_user == null){
        console.log("usuario no existe")
        this.handleButtonClick()
      } else {
        this.storage.set('token', token).then(result => {
          console.log('Data is saved');
          }).catch(e => {
          console.log("error: " + e);
          });

        this.storage.setObject('user', d.get_user).then(result => {
          console.log('Data is saved');
          this.router.navigate([''])
          }).catch(e => {
          console.log("error: " + e);
          });

      }
    })
  }

  async  handleButtonClick() {
    const alert = await this.alertController.create({
      header: 'Usuario o Contraseña incorrectos',
     
      buttons: ['Agree']
    });

    await alert.present();
  }

  ngOnInit() {
  }

  
}
