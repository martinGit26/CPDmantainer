import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AddServerPage} from '../modals/add-server/add-server.page';

//import {OnInit} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  activos = ""
  constructor(public modalControler: ModalController, public apollo: Apollo){
   this.download()
  }
  async addServer(){
    console.log("open modal")
    const modal = await this.modalControler.create({
      component: AddServerPage, 
      cssClass : 'my-custom-class'
    })
 
    return await modal.present()
  }

  private async download(){
    console.log("descargando")
    await this.apollo
    .watchQuery({
      query: gql`{
        getAllActivos{
          nombre,
          host, 
          tipo
        }
      }`, 
      pollInterval: 500,
    }).valueChanges
    .subscribe( (data: any) => {
      console.log(data)
      this.activos = data.data.getAllActivos
    })
  }

  
}
