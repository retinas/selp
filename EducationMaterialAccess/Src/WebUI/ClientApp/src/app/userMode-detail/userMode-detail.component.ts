import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpsertUserModeCommand, UserModeClient, UserModeDetailVm } from '../educationMat-api';

@Component({
  selector: 'app-userMode.detail',
  templateUrl: './userMode-detail.component.html'
})
export class UserModeDetailComponent implements OnInit {

  upsertUserModeCommand: UpsertUserModeCommand = new UpsertUserModeCommand();
  userModeDetailVm: UserModeDetailVm = new UserModeDetailVm();
  public mode = "INSERT";

  constructor(private userModeClient: UserModeClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let userModeId = this.route.snapshot.paramMap.get('id');
    if (userModeId == null) {
      this.mode = "INSERT";
    } else {
      this.mode == "UPDATE";
      this.userModeClient.get(+userModeId).subscribe(result => {
        this.userModeDetailVm = result;
      });
    }
  }

  _clickBtnSave() {
    this.upsertUserModeCommand.description = this.userModeDetailVm.description;

    this.userModeClient.create(this.upsertUserModeCommand).subscribe(result => { });
  }

  _clickBtnUpdate() {
    this.upsertUserModeCommand.id = this.userModeDetailVm.id;
    this.upsertUserModeCommand.description = this.userModeDetailVm.description;

    this.userModeClient.update(this.upsertUserModeCommand).subscribe(result => { });
  }
}
