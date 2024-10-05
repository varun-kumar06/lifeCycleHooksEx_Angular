import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Input("nameInput")
  names: String[] = [];
  recievename(namesIn:String[]){
    this.names=namesIn;
  }

 ngOnChanges(){
   console.log("Page Created");
 }

 ngOnInit() {
   if(this.names.length==0){
    this.names.push("Welcome");
    console.log("Data Loaded");
   }
 }
 len:number = 0; 
 ngDoCheck(){
   if(this.names.length > this.len) {
    console.log("Array Added")
   }
 }

 ngOnDestroy(){
  console.log("Destory")
 }
}
