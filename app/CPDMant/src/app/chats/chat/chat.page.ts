import { Component, OnInit, Input} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {StorageService} from '../../services/storage.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @Input() activo:any;
  public changes: any;
  public message: any;
  constructor(public apollo: Apollo, public storage: StorageService) { 
      
  } 

  async getChanges(){

    var query = gql`query getChanges($host:String){
      getChanges(activo: $host){
        user, 
        mensaje
      }
    }`
    await this.apollo
    .watchQuery({
      query: query, 
      variables: {"host": this.activo}, 
      pollInterval:500
    })
    .valueChanges
    .subscribe( data => {
      this.changes = data.data
      console.log(this.changes)
    })
  }
  
  async send(){
    var mutation = gql`mutation newChange($change1: ChangeInput){
      newChange(change: $change1){
        mensaje
      }
    }`

    var user:any;

    await this.storage.getObject('user').then(result => {
      if (result != null) {
      user = result
      }
      }).catch(e => {
      console.log('error: ', e);
      });
    
    var change = {
      user: user.username, 
      mensaje: this.message, 
      activo: this.activo
    }
    console.log(change)
    await this.apollo.mutate({
      mutation: mutation, 
      variables: {"change1":change}
    }).subscribe(data => {
      console.log(data)
      this.message = ""
    })
  }

  ngOnInit() {
    this.getChanges()
  }

}
