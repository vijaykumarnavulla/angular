import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MyServiceDataService } from '../my-service-data.service';

@Component({
  selector: 'app-image-heart-text-component',
  templateUrl: './image-heart-text-component.component.html',
  styleUrls: ['./image-heart-text-component.component.css']
})
export class ImageHeartTextComponentComponent implements OnInit, OnChanges {
  @Input() userList: any;
  public selectedValue: any;
  constructor(private myServiceDataService: MyServiceDataService) { }

  ngOnInit() {
    this.myServiceDataService.getIndex().subscribe(data => { this.selectedValue = this.userList[data]; });
  }

  ngOnChanges() {
    if (this.userList) {
      const defaultValue = this.userList[0];
      this.selectedValue = defaultValue;
    }
  }

}
