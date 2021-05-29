import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AddServerComponent} from '../modals/add-server/add-server.component';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalControler: ModalController){

  }
  async addServer(){
    console.log("open modal")
    const modal = await this.modalControler.create({
      component: AddServerComponent, 
      cssClass : 'my-custom-class'
    })

    return await modal.present()
  }
}
