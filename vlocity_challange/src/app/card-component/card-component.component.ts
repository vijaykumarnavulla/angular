import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MyServiceDataService } from '../my-service-data.service';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit, OnChanges {
  @Input() userList: any;
  constructor(private myServiceDataService:MyServiceDataService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.userList);
  }

  onUserClick(index){
    this.myServiceDataService.setIndex(index);
  }
}
