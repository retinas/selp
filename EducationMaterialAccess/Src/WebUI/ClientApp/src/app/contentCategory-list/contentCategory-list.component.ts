import { Component, OnInit } from '@angular/core';
import { ContentCategoryClient, ContentCategoriesListVm } from '../educationMat-api';

@Component({
  selector: 'app-contentCategory.list',
  templateUrl: './contentCategory-list.component.html'
})
export class CategoryListComponent implements OnInit {

  public vm: ContentCategoriesListVm = new ContentCategoriesListVm();

  constructor(private client: ContentCategoryClient) {

  }

  ngOnInit() {
    this.client.getAll().subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }
}
