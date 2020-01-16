import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpsertSubscriptionTypeCommand, SubscriptionTypeClient, SubscriptionTypeDetailVm } from '../educationMat-api';

@Component({
  selector: 'app-subscriptionType.detail',
  templateUrl: './subscriptionType-detail.component.html'
})
export class SubscriptionTypeDetailComponent implements OnInit {

  upsertSubscriptionTypeCommand: UpsertSubscriptionTypeCommand = new UpsertSubscriptionTypeCommand();
  subscriptionTypeDetailVm: SubscriptionTypeDetailVm = new SubscriptionTypeDetailVm();
  public mode = "INSERT";

  constructor(private subscriptionTypeClient: SubscriptionTypeClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let subscriptionTypeId = this.route.snapshot.paramMap.get('id');
    if (subscriptionTypeId == null) {
      this.mode = "INSERT";
    } else {
      this.mode == "UPDATE";
      this.subscriptionTypeClient.get(+subscriptionTypeId).subscribe(result => {
        this.subscriptionTypeDetailVm = result;
      });
    }
  }

  _clickBtnSave() {
    this.upsertSubscriptionTypeCommand.description = this.subscriptionTypeDetailVm.description;

    this.subscriptionTypeClient.create(this.upsertSubscriptionTypeCommand).subscribe(result => { });
  }

  _clickBtnUpdate() {
    this.upsertSubscriptionTypeCommand.id = this.subscriptionTypeDetailVm.id;
    this.upsertSubscriptionTypeCommand.description = this.subscriptionTypeDetailVm.description;

    this.subscriptionTypeClient.update(this.upsertSubscriptionTypeCommand).subscribe(result => { });
  }
}
