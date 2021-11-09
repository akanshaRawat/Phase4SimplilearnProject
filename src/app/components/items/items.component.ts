import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public items:any;
  public status:string='all';

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void { 
  
    this.items=this.dataSrv.showList();
  }
  filter(status:any){
    if(status=='active'){
      this.items=this.dataSrv.showActive();
      
    }else if (status=='inactive'){
      this.items=this.dataSrv.showInActive();
      
    }else{
      this.items=this.dataSrv.showList();
      
    }
   
  }

  

}
