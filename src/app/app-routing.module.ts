import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ItemsComponent } from './components/items/items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateComponent } from './components/items/create/create.component';
import { ListComponent } from './components/items/list/list.component';
import { UpdateComponent } from './components/items/update/update.component';
import { ItemsModule } from './components/items/items.module';
//create route
const routes: Routes = [
  {path:'',redirectTo:'/home' , pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'users',component:UsersComponent},
  {path:'signin',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'items',loadChildren: ()=>import('./components/items/items.module').then(m=>m.ItemsModule)},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ItemsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
