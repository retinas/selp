import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpsertContentDifficultyCommand, ContentDifficultyClient, ContentDifficultyDetailVm, } from '../educationMat-api';

@Component({
  selector: 'app-contentDifficulty.detail',
  templateUrl: './contentDifficulty-detail.component.html'
})
export class DifficultyDetailComponent implements OnInit {

  upsertContentDifficultyCommand: UpsertContentDifficultyCommand = new UpsertContentDifficultyCommand();
  contentDifficultyDetailVm: ContentDifficultyDetailVm = new ContentDifficultyDetailVm();
  public mode = "INSERT";

  constructor(private contentDifficultyClient: ContentDifficultyClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let contentDifficultyId = this.route.snapshot.paramMap.get('id');
    if (contentDifficultyId == null) {
      this.mode = "INSERT";
    } else {
      this.mode == "UPDATE";
      this.contentDifficultyClient.get(+contentDifficultyId).subscribe(result => {
        this.contentDifficultyDetailVm = result;
      });
    }
  }

  _clickBtnSave() {
    this.upsertContentDifficultyCommand.description = this.contentDifficultyDetailVm.description;

    this.contentDifficultyClient.create(this.upsertContentDifficultyCommand).subscribe(result => { });
  }

  _clickBtnUpdate() {
    this.upsertContentDifficultyCommand.id = this.contentDifficultyDetailVm.id;
    this.upsertContentDifficultyCommand.description = this.contentDifficultyDetailVm.description;

    this.contentDifficultyClient.update(this.upsertContentDifficultyCommand).subscribe(result => { });
  }
}
