import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ng-model-demo',
  templateUrl: './ng-model-demo.component.html',
  styleUrls: ['./ng-model-demo.component.scss']
})
export class NgModelDemoComponent implements OnInit {

  constructor() { }

  filter: any;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];


  ngOnInit(): void {
    this.filter = [{ 'foodType': this.foods, value: '' }];
  }


  changeData(data: any, index: number) {

  }

  addRow(index: number) {

  }

}
