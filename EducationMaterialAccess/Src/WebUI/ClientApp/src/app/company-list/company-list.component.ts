import { Component, OnInit } from '@angular/core';
import { CompaniesClient, CompaniesListVm } from '../educationMat-api';

@Component({
  selector: 'app-listCompanies',
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {

  public vm: CompaniesListVm = new CompaniesListVm();

  constructor(private client: CompaniesClient) {

  }

  ngOnInit() {
    this.client.getAll().subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }
}
