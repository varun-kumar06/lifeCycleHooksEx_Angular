import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  names:string[]=[];
  name="";

  
  submit(){
    this.names.push(this.name);
  }

  showTable:boolean=false;
}
