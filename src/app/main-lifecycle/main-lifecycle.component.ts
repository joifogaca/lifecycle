import { Component, OnInit } from '@angular/core';
import { Client } from '../clients';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {

  constructor() { }
  //private 
  foods: string[] = ["Rice", "Bean", "Pizza"];
  //private 
  clients: Client[] = [];
  private editClient: Client = null;

  //private 
  name: string;
  //private 
  age: number;
  //private 
  food: string;

  ngOnInit(): void {
  }

  save(){
    if(this.editClient==null){
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food
      });
    }
    
  }

}
