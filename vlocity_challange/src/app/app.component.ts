import { Component, OnInit } from '@angular/core';
import { MyServiceDataService } from './my-service-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  userList: any;
  constructor(private myServiceData: MyServiceDataService) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.myServiceData
      .getUserList()
      .subscribe(data => {
        this.userList = data.People;
        console.log(this.userList);
      }
      );
  }
}
