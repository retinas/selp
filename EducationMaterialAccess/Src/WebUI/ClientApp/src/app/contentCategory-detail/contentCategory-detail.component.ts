import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpsertContentCategoryCommand, ContentCategoryClient, ContentCategoryDetailVm } from '../educationMat-api';

@Component({
  selector: 'app-contentCategory.detail',
  templateUrl: './contentCategory-detail.component.html'
})
export class CategoryDetailComponent implements OnInit {

  upsertContentCategoryCommand: UpsertContentCategoryCommand = new UpsertContentCategoryCommand();
  contentCategoryDetailVm: ContentCategoryDetailVm = new ContentCategoryDetailVm();
  public mode = "INSERT";

  constructor(private contentCategoryClient: ContentCategoryClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let categoryId = this.route.snapshot.paramMap.get('id');
    if (categoryId == null) {
      this.mode = "INSERT";
    } else {
      this.mode == "UPDATE";
      this.contentCategoryClient.get(+categoryId).subscribe(result => {
        this.contentCategoryDetailVm = result;
      });
    }
  }

  _clickBtnSave() {
    this.upsertContentCategoryCommand.description = this.contentCategoryDetailVm.description;    

    this.contentCategoryClient.create(this.upsertContentCategoryCommand).subscribe(result => { });
  }

  _clickBtnUpdate() {
    this.upsertContentCategoryCommand.id = this.contentCategoryDetailVm.id;
    this.upsertContentCategoryCommand.description = this.contentCategoryDetailVm.description;    

    this.contentCategoryClient.update(this.upsertContentCategoryCommand).subscribe(result => { });
  }
}
