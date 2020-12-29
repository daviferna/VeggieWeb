import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Page components
import { HomePageComponent} from '../components/home-page.component/home-page.component';
import { VeggieListPageComponent} from '../components/veggie-list-page.component/veggie-list-page.component';
import { VeggieInfoPageComponent} from '../components/veggie-info-page.component/veggie-info-page.component';
import { ContactPageComponent} from '../components/contact-page.component/contact-page.component';

const routes: Routes = [
  {path:'home', component: HomePageComponent},
  {path:'veggie/list', component: VeggieListPageComponent},
  {path:'veggie/:id', component: VeggieInfoPageComponent},
  {path:'contact', component: ContactPageComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
