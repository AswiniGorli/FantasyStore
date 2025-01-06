import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { VkComponent } from './vk/vk.component';
import { CrComponent } from './cr/cr.component';
import { SpideyComponent } from './spidey/spidey.component';
import { FrozenComponent } from './frozen/frozen.component';
import { DevotionComponent } from './devotion/devotion.component';
import { ShinchanComponent } from './shinchan/shinchan.component';
import { VkdetailsComponent } from './vkdetails/vkdetails.component';

const routes: Routes = [
{
  path:'',component:WelcomepageComponent
},
{
  path:'vk',component:VkComponent
},
{
  path:'cr',component:CrComponent
},
{
  path:'spidey',component:SpideyComponent
},
{
  path:'frozen',component:FrozenComponent
},
{
  path:'devotion',component:DevotionComponent
},
{
  path:'shinchan',component:ShinchanComponent
},
{
  path:'vkdetails',component:VkdetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
