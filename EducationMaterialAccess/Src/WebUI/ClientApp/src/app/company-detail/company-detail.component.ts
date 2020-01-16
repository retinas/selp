import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpsertCompanyCommand, CompaniesClient,CompanyDetailVm } from '../educationMat-api';

@Component({
  selector:'app-company.detail',
  templateUrl: './company-detail.component.html'
})
export class CompanyDetailComponent implements OnInit {

  upsertCompanyCommand: UpsertCompanyCommand = new UpsertCompanyCommand();
  companyDetailVm: CompanyDetailVm = new CompanyDetailVm();
  public mode = "INSERT";

  constructor(private companyClient: CompaniesClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let companyId = this.route.snapshot.paramMap.get('id');
    if (companyId == null) {
      this.mode = "INSERT";
    } else {
      this.mode == "UPDATE";
      this.companyClient.get(+companyId).subscribe(result => {
        this.companyDetailVm = result;
        this.companyDetailVm.id = result.id;
      });
    }   
  }

  _clickBtnSave() {
    this.upsertCompanyCommand.companyAdress = this.companyDetailVm.companyAdress;
    this.upsertCompanyCommand.companyName = this.companyDetailVm.companyName;
    this.upsertCompanyCommand.companyProvince = this.companyDetailVm.companyProvince;
    this.upsertCompanyCommand.companyTaxOffice = this.companyDetailVm.companyTaxOffice;
    this.upsertCompanyCommand.companyVAT = this.companyDetailVm.companyVAT;
    
    this.companyClient.create(this.upsertCompanyCommand).subscribe(result => { });
  }

  _clickBtnUpdate() {
    this.upsertCompanyCommand.id = this.companyDetailVm.id;
    this.upsertCompanyCommand.companyAdress = this.companyDetailVm.companyAdress;
    this.upsertCompanyCommand.companyName = this.companyDetailVm.companyName;
    this.upsertCompanyCommand.companyProvince = this.companyDetailVm.companyProvince;
    this.upsertCompanyCommand.companyTaxOffice = this.companyDetailVm.companyTaxOffice;
    this.upsertCompanyCommand.companyVAT = this.companyDetailVm.companyVAT;

    this.companyClient.update(this.upsertCompanyCommand).subscribe(result => { });
  }
}
