import { Component, OnInit } from '@angular/core';
import { ContentDifficultyClient, ContentDifficultyListVm } from '../educationMat-api';

@Component({
  selector: 'app-contentDifficulty.list',
  templateUrl: './contentDifficulty-list.component.html'
})
export class DifficultyListComponent implements OnInit {

  public vm: ContentDifficultyListVm = new ContentDifficultyListVm();

  constructor(private client: ContentDifficultyClient) {

  }

  ngOnInit() {
    this.client.getAll().subscribe(result => {
      this.vm = result;
    }, error => console.error(error));
  }
}
