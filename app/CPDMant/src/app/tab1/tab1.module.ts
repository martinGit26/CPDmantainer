import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { AddServerPage } from '../modals/add-server/add-server.page'
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import {ActivoComponent} from '../card/activo/activo.component'



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule, 
    
    
  ],
  declarations: [Tab1Page, ActivoComponent, AddServerPage]
})
export class Tab1PageModule {

}
