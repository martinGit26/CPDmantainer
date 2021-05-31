import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular' 
import {ChatPage} from '../../chats/chat/chat.page';
@Component({
  selector: 'app-activo',
  templateUrl: './activo.component.html',
  styleUrls: ['./activo.component.scss'],
})
export class ActivoComponent implements OnInit {
  @Input() data: any;
  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async viewChangelog(host){
    const modal = await this.modalController.create({
      component: ChatPage, 
      cssClass: 'my-custom-class', 
      componentProps: {
        'activo': host
      }

    })
    console.log("opening changelog of " + host)

    return await modal.present()
  }

}
