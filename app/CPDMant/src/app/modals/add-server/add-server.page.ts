import { Component, OnInit, } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

import {Apollo, gql} from 'apollo-angular'


@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.page.html',
  styleUrls: ['./add-server.page.scss'],
})
export class AddServerPage implements OnInit {
  public form = {
    host: "", 
    nombre: "", 
    tipo: ""
   }
  constructor(public apollo: Apollo) {

  }
   

  async newActivo(){
   var query = gql`
      mutation add($activo: ActivoInput){
          addActivo(activo: $activo){
            nombre
          }
      }`
    this.apollo.mutate({
      mutation: query, 
      variables: {
        activo: this.form
      }

    }).subscribe( data => {
      console.log("todo bien esto fue lo que nos llego:" + data.data)
    })
    
    console.log(this.form)

  }
  ngOnInit() {}

}
