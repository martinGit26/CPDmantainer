import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ModalController } from '@ionic/angular';
import {AddServerComponent} from '../modals/add-server/add-server.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {
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
