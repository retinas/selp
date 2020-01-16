import { Component, OnInit } from '@angular/core';
import { SubscriptionTypeClient, SubscriptionTypeListVm } from '../educationMat-api';

@Component({
  selector: 'app-subscriptionType.list',
  templateUrl: './subscriptionType-list.component.html'
})
export class SubscriptionTypeListComponent implements OnInit {

  public vm: SubscriptionTypeListVm = new SubscriptionTypeListVm();

  constructor(private client: SubscriptionTypeClient) {

  }

  ngOnInit() {
    this.client.getAll().subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }
}
