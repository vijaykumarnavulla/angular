import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MyServiceDataService {

  constructor(private httpClient: HttpClient) { }
  users = [];

  public selectedIndex: Subject<any> = new Subject();

  readonly api = '../assets/people.json';

  getUserList(): Observable<any> {
    return this.httpClient.get(this.api);
  }
  getIndex(): Observable<any> {
    return this.selectedIndex.asObservable();
  }

  setIndex(indexValue: number): void {
    this.selectedIndex.next(indexValue);
  }


}
