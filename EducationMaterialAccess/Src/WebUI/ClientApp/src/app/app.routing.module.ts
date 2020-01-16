import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { CategoryDetailComponent } from './contentCategory-detail/contentCategory-detail.component';
import { CategoryListComponent } from './contentCategory-list/contentCategory-list.component';
import { DifficultyDetailComponent } from './contentDifficulty-detail/contentDifficulty-detail.component';
import { DifficultyListComponent } from './contentDifficulty-list/contentDifficulty-list.component';
import { UserModeDetailComponent } from './userMode-detail/userMode-detail.component';
import { UserModeListComponent } from './userMode-list/userMode-list.component';
import { SubscriptionTypeDetailComponent } from './subscriptionType-detail/subscriptionType-detail.component';
import { SubscriptionTypeListComponent } from './subscriptionType-list/subscriptionType-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { HomeComponent } from './home/home.component';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  //{ path: 'customers', component: CustomersComponent, canActivate: [AuthorizeGuard] },
  { path: 'companyDetails', component: CompanyDetailComponent },
  { path: 'companyDetails/:id', component: CompanyDetailComponent },
  { path: 'companyList', component: CompanyListComponent },
  { path: 'deviceDetails', component: DeviceDetailComponent },
  { path: 'deviceDetails/:id', component: DeviceDetailComponent },
  { path: 'deviceList', component: DeviceListComponent },
  { path: 'contentCategoryDetails', component: CategoryDetailComponent },
  { path: 'contentCategoryDetails/:id', component: CategoryDetailComponent },
  { path: 'contentCategoryList', component: CategoryListComponent },
  { path: 'contentDifficultyDetails', component: DifficultyDetailComponent },
  { path: 'contentDifficultyDetails/:id', component: DifficultyDetailComponent },
  { path: 'contentDifficultyList', component: DifficultyListComponent },
  { path: 'userModeDetails', component: UserModeDetailComponent },
  { path: 'userModeDetails/:id', component: UserModeDetailComponent },
  { path: 'userModeList', component: UserModeListComponent },
  { path: 'subscriptionTypeDetails', component: SubscriptionTypeDetailComponent },
  { path: 'subscriptionTypeDetails/:id', component: SubscriptionTypeDetailComponent },
  { path: 'subscriptionTypeList', component: SubscriptionTypeListComponent },
  { path: 'contentDetails', component: ContentDetailComponent },
  { path: 'contentDetails/:id', component: ContentDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
