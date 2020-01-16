import { Component, OnInit } from '@angular/core';
import { DeviceClient, DevicesListVm } from '../educationMat-api';

@Component({
  selector: 'app-deviceList',
  templateUrl: './device-list.component.html'
})
export class DeviceListComponent implements OnInit {

  public vm: DevicesListVm = new DevicesListVm();

  constructor(private client: DeviceClient) {

  }

  ngOnInit() {
    this.client.getAll().subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }
}
