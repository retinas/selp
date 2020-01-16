import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app.routing.module'
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
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
import { NgSelectModule } from '@ng-select/ng-select';


import { API_BASE_URL, CompaniesClient, DeviceClient, ContentCategoryClient, ContentDifficultyClient, UserModeClient, SubscriptionTypeClient, ContentClient } from './educationMat-api';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CompanyDetailComponent,
    CompanyListComponent,
    DeviceDetailComponent,
    DeviceListComponent,
    CategoryDetailComponent,
    CategoryListComponent,
    DifficultyDetailComponent,
    DifficultyListComponent,
    UserModeListComponent,
    UserModeDetailComponent,
    SubscriptionTypeDetailComponent,
    SubscriptionTypeListComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ApiAuthorizationModule,
    NgSelectModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    { provide: API_BASE_URL, useValue: environment.apiBaseUrl },
    CompaniesClient,
    DeviceClient,
    ContentCategoryClient,
    ContentDifficultyClient,
    UserModeClient,
    SubscriptionTypeClient,
    ContentClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
