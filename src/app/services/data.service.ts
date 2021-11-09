import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public items:any=[
    {id:10001,name:'Pizza',price: 590,active:true},
    {id:10002,name:'Noodles',price: 120,active:true},
    {id:10003,name:'Daal Makhni',price: 150,active:false},
    {id:10004,name:'Paneer Butter Masala',price: 200,active:true},
    {id:10005,name:'Sandwitches',price: 180,active:true},
    {id:10006,name:'Garlic Bread',price: 100,active:false},
    {id:10007,name:'Honey chilli Potato',price: 180,active:false},
  ]

  
  constructor() { }

  public showList():any{
    return this.items;

  }

  public showActive():any{

     return this.items.filter(function(items:any){
      return items.active; 

    })
  }

  public showInActive():any{

    return this.items.filter(function(items:any){
     return !items.active; 

   })
 }
}
