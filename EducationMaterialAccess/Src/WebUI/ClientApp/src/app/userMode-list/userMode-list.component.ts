import { Component, OnInit } from '@angular/core';
import { UserModeClient, UserModesListVm } from '../educationMat-api';

@Component({
  selector: 'app-userMode.list',
  templateUrl: './userMode-list.component.html'
})
export class UserModeListComponent implements OnInit {

  public vm: UserModesListVm = new UserModesListVm();

  constructor(private client: UserModeClient) {

  }

  ngOnInit() {
    this.client.getAll().subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }
}
