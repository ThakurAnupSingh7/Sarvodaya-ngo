import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OutreachComponent } from './outreach/outreach.component';
import { FundingComponent } from './funding/funding.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';

const routes: Routes = [
  {path:'',redirectTo:'Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'about', component:AboutUsComponent},
  {path:'ourwork', component:OurWorkComponent},
  {path:'outreach', component:OutreachComponent},
  {path:'funding', component:FundingComponent},
   {path:'gallery', component:GalleryComponent},
  {path:'getinvolved', component:GetInvolvedComponent},
  {path:'contactUs', component:ContactUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
