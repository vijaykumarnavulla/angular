import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MyServiceDataService } from '../my-service-data.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit, OnChanges {

  @Input() userList: any;
  likesArray: any[] = [];
  dislikeArray: any[] = [];
  parseObject: any = [];
  constructor(private myservicedata: MyServiceDataService) { }

  ngOnInit() {
    this.myservicedata.getIndex().subscribe(data => { this.onSetIndexValue(data); });
  }

  ngOnChanges() {
    if (this.userList) {
      this.onSetIndexValue(0);
    }
  }

  onSetIndexValue(index: number) {
    this.likesArray = this.userList[index].Likes;
    this.dislikeArray = this.userList[index].Dislikes;
    this.parseObject = [];
    for (let i = 0; i < this.likesArray.length; i++) {
      const obj = {};
      obj['like'] = this.likesArray[i];
      this.parseObject.push(obj);
    }
    for (let i = 0; i < this.dislikeArray.length; i++) {
      const obj = this.parseObject[i];
      obj['dislike'] = this.dislikeArray[i];
      // this.parseObject.push(obj);
    }
  }
}
