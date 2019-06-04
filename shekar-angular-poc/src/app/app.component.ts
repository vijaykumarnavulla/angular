import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularpoc';
  obj = {asfas:'sadf'};
  nodes = [
    {
      name: 'root1',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ]
    },
    {
      name: 'root2',
      children: [
        { name: 'child2.1', children: [] },
        { name: 'child2.2', children: [
          {name: 'grandchild2.2.1'}
        ] }
      ]
    },
    { name: 'root3' },
    { name: 'root4', children: [] },
    { name: 'root5', children: null }
  ];
  // items = {'asdfa'}
  public isbtnFirst:boolean;
  public firstTabFlags:object = {isbtnFirst:false,isbtnSecond:false,isbtnThird:false,isbtnFour:false};
  public thirdTabFlags:object = {isbtnFirst:false,isbtnSecond:false,isbtnThird:false,isbtnFour:false};

  
  testevent(event){
    console.log(event);
  }

  test(){
    // return this.obj.asfas['afsadf'];
    return this.obj.asfas;
  }
}
