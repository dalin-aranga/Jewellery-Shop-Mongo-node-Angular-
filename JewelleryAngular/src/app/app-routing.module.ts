import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerComponent } from './customer/customer.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StaffComponent } from './staff/staff.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'aboutus',component:AboutUsComponent},
{path:'contactus',component:ContactUsComponent},
{path:'jewellery',component:JewelleryComponent},
{path:'staff',component:StaffComponent},
{path:'customer',component:CustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
