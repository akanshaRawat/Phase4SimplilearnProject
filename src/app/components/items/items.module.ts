import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
    {path:'',component:ItemsComponent},
    {path:'items',component:ItemsComponent},
    {path:'create',component:CreateComponent},
    {path:'list',component:ListComponent},
    {path:'update',component:UpdateComponent}
  
];

@NgModule({
  declarations: [
    ItemsComponent,
    CreateComponent,
    ListComponent,
    UpdateComponent
  ],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class ItemsModule { }
