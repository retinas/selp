import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpsertContentCommand, ContentClient, ContentDetailVm, ContentCategoryClient, ContentDifficultyClient, UserModeClient, UserModeLookUpDto, ContentDifficultyLookUpDto, ContentCategoryLookUpDto, IUserModeClient } from '../educationMat-api';

@Component({
  selector: 'app-content.detail',
  templateUrl: './content-detail.component.html'
})
export class ContentDetailComponent implements OnInit {

  upsertContentCommand: UpsertContentCommand = new UpsertContentCommand();
  contentDetailVm: ContentDetailVm = new ContentDetailVm();
  userModeListVm = new Array<UserModeLookUpDto>();
  contentCategoryListVm = new Array<ContentCategoryLookUpDto>();
  contentDifficultyListVm = new Array<ContentDifficultyLookUpDto>();
   
  public mode = "INSERT";

  constructor(private contentClient: ContentClient, private userModeClient: UserModeClient, private contentDifficultyClient: ContentDifficultyClient, private contentCategoryClient: ContentCategoryClient, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.userModeClient.getAll().subscribe(result => {
      this.userModeListVm = result.userModes;
    });

    this.contentCategoryClient.getAll().subscribe(result => {
      this.contentCategoryListVm = result.contentCategories;
    });

    this.contentDifficultyClient.getAll().subscribe(result => {
      this.contentDifficultyListVm = result.contentDifficulties;
    });


    let contentId = this.route.snapshot.paramMap.get('id');
    if (contentId == null) {
      this.mode = "INSERT";
    } else {
      this.mode == "UPDATE";
      this.contentClient.get(+contentId).subscribe(result => {
        this.contentDetailVm = result;
      });
    }
  }

  

  _clickBtnSave() {
    this.upsertContentCommand.title = this.contentDetailVm.title;
    this.upsertContentCommand.description = this.contentDetailVm.description;
    this.upsertContentCommand.additionalInfo = this.contentDetailVm.additionalInfo;
    this.upsertContentCommand.contentCategoryId = this.contentDetailVm.contentCategoryId;
    this.upsertContentCommand.contentDifficultyId = this.contentDetailVm.contentDifficultyId;
    this.upsertContentCommand.instructions = this.contentDetailVm.instructions;
    this.upsertContentCommand.price = this.contentDetailVm.price;
    this.upsertContentCommand.userCompetence = this.contentDetailVm.userCompetence;
    this.upsertContentCommand.userModeIds = this.contentDetailVm.userModeIds;
    this.upsertContentCommand.imageBase64 = this.contentDetailVm.imageBase64;

    this.contentClient.create(this.upsertContentCommand).subscribe(result => { });
  }

  _clickBtnUpdate() {
    this.upsertContentCommand.id = this.contentDetailVm.id;
    this.upsertContentCommand.description = this.contentDetailVm.description;
    this.upsertContentCommand.additionalInfo = this.contentDetailVm.additionalInfo;
    this.upsertContentCommand.contentCategoryId = this.contentDetailVm.contentCategoryId;
    this.upsertContentCommand.contentDifficultyId = this.contentDetailVm.contentDifficultyId;
    this.upsertContentCommand.instructions = this.contentDetailVm.instructions;
    this.upsertContentCommand.price = this.contentDetailVm.price;
    this.upsertContentCommand.title = this.contentDetailVm.title;
    this.upsertContentCommand.userCompetence = this.contentDetailVm.userCompetence;
    this.upsertContentCommand.userModeIds = this.contentDetailVm.userModeIds;
    this.upsertContentCommand.imageBase64 = this.contentDetailVm.imageBase64;

    this.contentClient.update(this.upsertContentCommand).subscribe(result => { });
  }
}
