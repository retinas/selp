import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpsertDeviceCommand, CompaniesClient, CompaniesListVm, CompanyLookUpDto, DeviceClient, DeviceDetailVm } from '../educationMat-api';

@Component({
  selector: 'app-device.detail',
  templateUrl: './device-detail.component.html'
})
export class DeviceDetailComponent implements OnInit {

  upsertDeviceCommand: UpsertDeviceCommand = new UpsertDeviceCommand();
  deviceDetailVm: DeviceDetailVm = new DeviceDetailVm();
  companiesListVm = new Array<CompanyLookUpDto>();
  private selectUndefinedOptionValue: any;
  public mode = "INSERT";

  constructor(private companyClient: CompaniesClient, private deviceClient: DeviceClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.companyClient.getAll().subscribe(result => {
      this.companiesListVm = result.companies;
    });

    let deviceId = this.route.snapshot.paramMap.get('id');
    if (deviceId == null) {
      this.mode = "INSERT";
    } else {
      this.mode == "UPDATE";
      this.deviceClient.get(+deviceId).subscribe(result => {
        this.deviceDetailVm = result;
        this.upsertDeviceCommand.id = result.id;
      });
    }
  }

  _clickBtnSave() {
    this.upsertDeviceCommand.companyId = this.deviceDetailVm.companyId;
    this.upsertDeviceCommand.deviceNumber = this.deviceDetailVm.deviceNumber;
    this.upsertDeviceCommand.model = this.deviceDetailVm.model;

    this.deviceClient.create(this.upsertDeviceCommand).subscribe(result => {
      //this.spinner.hide();
      //if (result != null && result.length > 0) {
        //this.toastr.error(result, 'Hata');
      //} else {
        //this.toastr.success('Koli kaydı başarıyla eklenmiştir!', 'İşlem Başarılı');
      //}
    });
  }
}
